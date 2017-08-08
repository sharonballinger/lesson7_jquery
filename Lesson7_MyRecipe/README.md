## Project Name:  Recipe Display Application

### Course Title:
LIS 2360:  Web Application Development

### Assignment Date:  
August 5, 2017

### Student Name:  
Sharon Ballinger

### Project Description:
An introduction to jQuery

### View Project:
https://sharonballinger.github.io/lesson7_jquery/ballinger_lesson7

### Lessons Learned in the Assignment:
#### 1. jQuery and Javascript
jQuery is an open source Javascript library. JavaScript can seem a little longwinded and hard to comprehend; this is where jQuery comes in. jQuery simplifies the JavaScript by reducing the amount you need to code. The jQuery library needs to be referenced in your web designs either by downloading the library and hosting it on your web server or by adding a link to the online library. The only downside of using the link version is that you can't develop your websites without having the internet.

#### 2. How to code with jQuery
jQuery uses HTML elements and adds an action. You are able to change the CSS with jQuery. It is a JavaScript language that uses the DOM tree: working with decendants, siblings, children etc. jQuery is about changing the HTML code and making it into a dynamic and unique client friendly website.

To start, you want your web design to fully load before any jQuery manipulation takes place. To do so there are two options to add to your `.js` file.

First option is allowing the browser to finish with an `onload`. The only downside is that the jQuery will wait for all images to be downloaded as well as any adverts.
```
> window.onload = function () {
>      alert ( "Hi welcome to my site" );
> };
```
The other option is to wait until the file is ready.
```
> $ ( document ).ready(function() {
>      // your code
> });
```
**The jQuery syntax is:
`$(selector)action()`**

* The jQuery statement always start with `$` this is short for calling the jQuery library.

* The `selector` is a query to the HTML.

* The `action` is a jQuery action on the HTML.


**Using the `selector`**

The selector can be used to query any element within the HTML whether it is a class, id, buttons, lists, headings, body text etc. Below shows how to call between an id, class or element selector.

* `$("#id")` For an id.
* `$(".class")` For a class.
* `$("ul")` For an element.

Using the `action' 

The action is an event that you want to happen: rollover,  click, fade, focus, resize, blur, scroll etc.

Start with a selector of your choice `$("h1")` and add an event `$("h1").click();` this assigns a click even to all `h1` on your webpage.

Next a function needs to be declared so when you click on the `h1` the function will happen.

`$("h1").click(function) {`

`//add action here`

`}`

As well as adding further HTML to occur you are able to add CSS changes.
     

#### 3. Adding effects

As well as the actions described in section 2, you can also add animation to your webpages. You are able to move parts of a webpage by using CSS properties. 

**Syntax for an animation:** `$("selector").animate({params,speed,callback);`

* The `params` is the CSS properties that will be animated.

* The `speed` is either `slow`, `fast`, or in milleseconds.

* The `callback` is the function that occurs after the animation takes place.

There are other custom annimation declarations including adding a `.stop` to an animation or effect before it finishes. Adding a `.delay` by setting a timer. Adding a `.finish` declaration to stop runnning animations, remove queued animations, and to complete all matched animations.

With jQuery you are able to add a multitued amount of effects and animation to your webpage to create clean and user specific which results in a custom user experience. 