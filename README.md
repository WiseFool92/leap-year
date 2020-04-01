# _Leap Year_

#### _This site comes with the all basic parts to get you started making a single page website fast. | April 1st. 2020_

#### By _**Joshua Hellman & Nathan Watkins-Hoagland**_

## Description

_This leapyear site has one index.html file that is already linked to the included bootstrap.css(4.4), styles.css, jQuery.js(3.4.1), and scripts.js._

There is a pre-built two input form with a submit button. There is also a simple jQuery function that will console.log when the submit button is clicked.

The .gitignore file is a template for mac osx but a link is provided to get a template for any operating system.

[create a .gitignore template for your os here](https://www.gitignore.io/)

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```

4. navigate to the new folder that was created on your desk
5. select index.html
6. right click on the file and select _'open with'_
7. select your browser
8. enjoy this project

## Specs

### Behavior Driven Development Spec List
#### Leap year
|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| The program should return 'true' for years divisible by 4  | '2004' | 'true'  |
| The program should return false for years divisible by 100 | '1900' | 'false' |  
| The program should return 'true' for years divisible by 400 | '2000' | 'true' |
| The program should return 'false' when a year is not a leap year | '1993' | 'false' |
---
#### Pig Latin 
|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| The program does nothing to non-alphabetical characters | '4' | '4'  |
| The program adds "yay" to single-letter words beginning with a vowel. | 'I' | 'I-yay' |  
| The program adds "yay" to the end of words beginning with a vowel | 'Apple' | 'Apple-yay' |
| The program will take words that start with consecutive consonants and move those consonants to the end and add "ay" to the word | "create"| 'eatecr-ay' |
| The program will take words containing "qu" and treat it as one letter, it will remove the "u" as well as the "q" and place to the back of the word| 'squeal' | 'ealsqu-ay' |


## Support

_The software is provided as is. It might work as expected - or not. Just don't blame me._

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
- [jQuery](https://jquery.com/) - Used to interact with the DOM
- [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling

## Useful tools

- [free icons @ icons8](https://icons8.com/)
- [free icons @ fontawesome](https://fontawesome.com/)

---

- [Old School Gifs Search](https://gifcities.org/)
- [free images @ unsplash](https://unsplash.com/)

  - **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

  - _https://source.unsplash.com/400x400/?cat_
  - http://unsplash.it/500/500 - This will just return a random image the size of 500x500

---

- [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
- [CSS Grid Cheat Sheet](http://grid.malven.co/)

---

- [CSS Gradient BG Generator](https://mycolor.space/gradient)
- [CSS Basic Gradient Generator](https://cssgradient.io/)

---

- [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Joshua Hellman & Nathan Watkins-Hoagland_**
