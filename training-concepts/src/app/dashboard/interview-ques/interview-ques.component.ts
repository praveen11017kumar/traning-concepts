import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-ques',
  templateUrl: './interview-ques.component.html',
  styleUrls: ['./interview-ques.component.scss']
})
export class InterviewQuesComponent {
  coursesInfo = [
    {
      title: 'Angular',
      description: 'Angular is a component-based framework.',
      courseImage: '../../../../assets/images/ang.png',
      link:'https://github.com/sudheerj/angular-interview-questions',
      cheatSheetLink: 'https://hackr.io/blog/angular-cheat-sheet'
    },
    {
      title: 'Javascript',
      description: 'Angular is a component-based framework,',
      courseImage: '../../../../assets/images/java-script.jpg',
      link:'https://github.com/sudheerj/javascript-interview-questions',
      cheatSheetLink: 'https://quickref.me/javascript.html'
    },
    {
      title: 'HTML',
      description: 'Angular is a component-based framework,',
      courseImage: '../../../../assets/images/html-img.png',
      link:'https://www.interviewbit.com/html-interview-questions/',
      cheatSheetLink: 'http://www.simplehtmlguide.com/cheatsheet.php'
    },
    {
      title: 'CSS',
      description: 'Angular is a component-based framework,',
      courseImage: '../../../../assets/images/css.jpg',
      link:'https://www.shiksha.com/online-courses/articles/css-interview-questions-and-answers/',
      cheatSheetLink: 'https://websitesetup.org/css3-cheat-sheet/'
    },
    {
      title: 'Bootstrap',
      description: 'Angular is a component-based framework,',
      courseImage: '../../../../assets/images/bootstrap.jpg',
      link:'https://www.interviewbit.com/html-interview-questions/',
      cheatSheetLink: 'https://hackr.io/blog/angular-cheat-sheet'
    }
  ]
}
