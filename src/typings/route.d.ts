import {RouteMeta, RouteRecordRedirectOption} from "vue-router";

interface PageRoute {
    path: string;
    name?: string;
    component?: any;
    meta?: RouteMetaStyle;
    redirect?: RouteRecordRedirectOption;
    // 可自行添加其他属性
}

// 路由元信息
interface RouteMetaStyle extends RouteMeta {
    navigationStyle: "default" | "custom";
    title: string;
    backgroundColor: string;
    textColor: string | "dark" | "light";
}

type iconType = "icon" | "img"

interface TabBarRoute {
    // 路径
    path: string;
    // 标题
    text: string;
    // type
    type?: iconType;
    // icon
    icon?: string;
    // 未选中时的颜色
    color?: string;
    // 选中时的颜色
    activeColor?: string;
    // 未选中图片
    inactiveImg?: string;
    // 选中图片
    activeImg?: string;
    // 是否显示小红点
    dot?: boolean;
    // 图标右上角徽标的内容
    badge?: number | string;

}