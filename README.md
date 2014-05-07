#Lydia Butterfly

##About

Lydia Butterfly is a speed-based color puzzle game, dedicated to my niece Lydia. The first version of this game was launched on April 11th, 2014, after about four and a half days of development as a project for [Omaha Code School](https://github.com/omahacodeschool).

[Play it here!](http://lydiab.herokuapp.com/)

##How to Play

###Directions

1. Click Start.
2. Click sections to change their color.
3. Keep clicking until sections no longer match adjacent sections.

An example of a winning game:

![Winning game example](https://31.media.tumblr.com/f2425ce66787230b819556b2d03858fc/tumblr_inline_n40a8mXizS1s6jjx7.jpg)

###Other Tips

- Level 1 gives you 30 seconds to solve the puzzle. Each subsequent level decreases your time limit by 2 seconds, down to a minimum of 7 seconds.
- The computer will randomly change colors on the butterfly, so watch out!
- You can play as much as you would like without signing up, but if you do sign up, the game will keep track of your personal stats, and you will also be eligible for the high score table.

## Technical Stuff
##### (If you're interested in that kind of thing)

Lydia Butterfly is a Rails application, but Javascript is primarily what's making the game run, such as the timer mechanism, changing colors on click, randomly changing colors, automatically saving games, etc.

The butterfly itself is an SVG object that I created in Adobe Illustrator CC, because it was significantly simpler than cobbling together divs holding images, or drawing an HTML map over one image. Having each polygon in its own polygon tag simplified the process of manipulating the game using Javascript and CSS.

The code that is doing most of the heavy lifting in the game is located in app/assets/javascripts/games.js.

##Suggested Browsers

###Good:
- Chrome (Mac and Windows)
- Safari (Mac and iPhone)
- Opera (Mac)
- Firefox (Mac and Windows)
- Internet Explorer (Windows)

###Untested:
- Safari (Windows)
- Opera (Windows)
- Anything else not explicitly listed in the "Good", "Eh", and "Blech" sections

##The Future of Lydia Butterfly

- Mobile app maybe?
- More in the [issues section](https://github.com/Caraheacock/butterflies/issues?state=open)

I'm constantly trying to make the Lydia Butterfly experience better, so please report any bugs or suggestions in the [issues section](https://github.com/Caraheacock/butterflies/issues?state=open)! Please be as descriptive about bugs as possible (what you did that lead up to the bug, pictures of glitches, etc.). Thanks!
