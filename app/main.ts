import {nativeScriptBootstrap} from "nativescript-angular/application";

import fontModule = require("ui/styling/font");
fontModule.ios.registerFont("YuGothic-Regular.ttf");
fontModule.ios.registerFont("IcoMoon.ttf");

import {EpiMain} from "./epi.main";

nativeScriptBootstrap(EpiMain, [], {"cssFile": 'epi.css'});