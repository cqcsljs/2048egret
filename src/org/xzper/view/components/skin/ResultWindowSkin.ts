/**
 * Created by xzp on 2014/6/17.
 */

/// <reference path="../../../../../egret.d.ts"/>

module game {
    export class ResultWindowSkin extends egret.Skin
    {
        public constructor(){
            super();
        }

        private static _skinParts:Array<string> = ["button","resultUI"];

        public get skinParts():Array<string>{
            return ResultWindowSkin._skinParts;
        }

        /**
         * 按钮
         */
        public button:egret.Button;

        /**
         * 结果文本
         */
        public resultUI:egret.UIAsset;

        public createChildren():void {
            super.createChildren;

            //背景
            var backUI:egret.UIAsset = new egret.UIAsset();
            backUI.alpha = 0.3;
            backUI.percentHeight = backUI.percentWidth = 100;
            //使用九宫格
            var texture:egret.Texture = RES.getRes("source.background");
            var scale9Grid:egret.Rectangle = new egret.Rectangle(20, 20, 65, 65);
            var scaleBitmap:egret.Bitmap = new egret.Bitmap(texture);
            scaleBitmap.scale9Grid = scale9Grid;
            backUI.source = scaleBitmap;
            this.addElement(backUI);

            this.button = new egret.Button();
            this.button.horizontalCenter = 0;
            this.button.verticalCenter = 90;
            this.addElement(this.button);

            this.resultUI = new egret.UIAsset();
            this.resultUI.horizontalCenter = 0;
            this.resultUI.verticalCenter = -90;
            this.addElement(this.resultUI);
        }
    }
}