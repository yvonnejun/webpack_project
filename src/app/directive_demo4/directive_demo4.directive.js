/**
 * Created by DELL-PC on 2017/7/15.
 */

import { directiveDemo4Controller as controller } from './directive_demo4.controller'
import template from './directive_demo4.html'

export const directiveDemo4Directive = function () {
    return {
        template,
        controller,
        transclude:true,
        restrict: 'E',
    }
}