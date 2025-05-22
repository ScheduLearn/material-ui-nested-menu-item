import React from 'react';
import { MenuItemProps, MenuProps } from '@mui/material';

interface NestedMenuItemProps extends Omit<MenuItemProps, 'button'> {
    /**
     * Open state of parent `<Menu />`, used to close decendent menus when the
     * root menu is closed.
     */
    parentMenuOpen: boolean;
    /**
     * Component for the container element.
     * @default 'div'
     */
    component?: React.ElementType;
    /**
     * Effectively becomes the `children` prop passed to the `<MenuItem/>`
     * element.
     */
    label?: React.ReactNode;
    /**
     * @default <ArrowRight />
     */
    rightIcon?: React.ReactNode;
    /**
     * @default <ArrowLeft />
     */
    leftIcon?: React.ReactNode;
    /**
     * Props passed to container element.
     */
    ContainerProps?: React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement | null>;
    /**
     * Props passed to sub `<Menu/>` element
     */
    MenuProps?: Omit<MenuProps, 'children'>;
    /**
     * @see https://material-ui.com/api/list-item/
     */
    button?: true | undefined;
    /**
     * Specifies whether the menu should open to the right or left
     */
    direction?: 'left' | 'right';
}
/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
declare const NestedMenuItem: React.ForwardRefExoticComponent<Omit<NestedMenuItemProps, "ref"> & React.RefAttributes<HTMLLIElement | null>>;

export { type NestedMenuItemProps, NestedMenuItem as default };
