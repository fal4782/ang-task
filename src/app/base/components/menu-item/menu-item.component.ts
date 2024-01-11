import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '../../services/menu.service';
import { AppComponent } from 'src/app/app.component';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  host: {
    '[class.active-menuitem]': 'active',
    '[class.layout-root-menuitem]': 'root',
  },
  animations: [
    trigger('children', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          'z-index': 100,
        })
      ),
      state(
        'hidden',
        style({
          height: '0px',
          'z-index': '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input() item: any;

  @Input() index: number;

  @Input() root: boolean;

  @Input() visible: boolean;

  @Input() parentKey: string;

  animating: boolean = false;

  active = false;

  item1 = {};

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key: string;

  stayOpenAfterNavigation: boolean = false;

  constructor(
    public appMain: AppComponent,
    public router: Router,
    private cd: ChangeDetectorRef,
    private menuService: MenuService,
    private common: CommonService
  ) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(
      (key) => {
        // console.log('key',key);

        // deactivate current active menu
        if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
          this.active = false;
        }
      }
    );

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params) => {
        if (this.appMain.isHorizontal()) {
          this.active = false;
        } else {
          if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
          } else {
            this.active = false;
          }
        }

        if (this.stayOpenAfterNavigation) {
          this.active = true;
          this.animating = false;
          common.menuStayOpenAfterNavigation = false;

          this.stayOpenAfterNavigation = false;
        }
      });
  }

  ngOnInit() {
    if (!this.appMain.isHorizontal() && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }

    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);

    this.common.keepMenuOpenAfterNavigation.subscribe((menuItem) => {
      this.openMenu(menuItem);
    });
  }

  openMenu(menuItem) {
    let filtered;

    // let il = this.item.label;
    // console.log('top level', this.item);

    if (this.item.items) {
      const arr = Object.keys(this.item.items).map((item) => {
        if (this.item.items[item].label === menuItem.parentMenuItem) {
          if (this.item.items[item].label === menuItem.parentMenuItem)
            // console.log('**********', this.item);

            filtered = this.item;
        }
      });
      if (filtered) this.recursive(filtered, menuItem.parentMenuItem);
    }

    // if (filtered && filtered.items)
    //   filtered.items.map((item) => console.log('filteredITem', item));
    // if (menuItem.parentMenuItem === this.item.label) {
    //   console.log('menuitem', menuItem.parentMenuItem, menuItem);
    //   console.log('item', this.item.label);
    //   const route = menuItem.routerLink[0];
    //   const routeParts = route.replace(/^\//, '').split('/');
    //   const transformedRouteParts = routeParts.map((part) =>
    //     part.replace(/-/g, ' ')
    //   );
    //   const checkMenuItem = menuItem.parentMenuItem
    //     .toLowerCase()
    //     .replace(/-/g, ' ');
    //   //   if (transformedRouteParts.length > 2) {
    //   for (let i = 0; i < transformedRouteParts.length; i++) {
    //     console.log('part', transformedRouteParts[i]);
    //     if (transformedRouteParts[i] === checkMenuItem) {
    //       console.log(
    //         'transformedRoutePart',
    //         transformedRouteParts[i],
    //         transformedRouteParts[i - 1]
    //       );
    //       il = transformedRouteParts[i - 1];
    //       // break;
    //       // this.itemClick();
    //     }
    //   }
    //   //   }
    //   this.itemClick();
    // }
  }

  recursive(item, label) {
    // console.log('itemmmmm',item);
    // this.item = item;

    console.log('this.item', this.item);
    console.log('item', item);

    console.log('label inside recursion', label);

    this.itemClick(item);

    if (item.items) {
      console.log('item.items inside recursion', item.items);

      let fitem = item.items.filter((i: any) => {
        return i.label === label ? true : false;
      });

      if (fitem.length > 0) {
        console.log('fitem', fitem[0]);

        this.recursive(fitem[0], fitem[0].label);
      }
    } else {
      console.log('item not present');
    }
  }

  updateActiveStateFromRoute() {
    console.log('Checking active state for', this.item.label);
    console.log('RouterLink:', this.item.routerLink[0]);
    console.log(
      'Is Active:',
      this.router.isActive(
        this.item.routerLink[0],
        !this.item.items && !this.item.preventExact
      )
    );

    this.active = this.router.isActive(
      this.item.routerLink[0],
      !this.item.items && !this.item.preventExact
    );
  }

  itemClick(item?: any) {
    let item1;
    item1 = item ? item : this.item;
    console.log('itemClick called for', item1.label);

    if (item1.disabled) {
      event.preventDefault(); //prevent navigation and exits early
      return;
    }

    // navigate with hover in horizontal mode
    if (this.root) {
      this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key); //pass key associated with current item

    // execute command
    console.log('command', item1.command);

    if (item1.command) {
      // console.log("command:", item1.command);
      item1.command({ originalEvent: event, item: item1 });
    }

    // toggle active state with submenus
    if (item1.items) {
      console.log('Submenu detected for', item1.label);

      this.active = !this.active;
      //   this.active = true;
      this.animating = true;
      this.common.menuStayOpenAfterNavigation = true;

      this.stayOpenAfterNavigation = true;

      console.log(
        this.active,
        this.animating,
        this.common.menuStayOpenAfterNavigation,
        this.stayOpenAfterNavigation
      );
    } else {
      // activate item without submenus
      this.active = true;

      // hide overlay menus
      this.appMain.overlayMenuActive = false;
      this.appMain.staticMenuMobileActive = false;
      this.appMain.menuHoverActive = !this.appMain.menuHoverActive;

      // reset horizontal menu
      if (this.appMain.isHorizontal() || this.appMain.isSlim()) {
        this.menuService.reset();
      } //ensure that only one submenu is open at a time
    }
  }

  onMouseEnter() {
    // activate item on hover
    if (
      this.root &&
      this.appMain.menuHoverActive &&
      (this.appMain.isHorizontal() || this.appMain.isSlim()) &&
      this.appMain.isDesktop()
    ) {
      this.menuService.onMenuStateChange(this.key);
      this.active = true;
    }
  }

  onAnimationDone() {
    this.animating = false;
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
