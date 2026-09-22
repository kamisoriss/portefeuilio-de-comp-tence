import { Component,inject } from '@angular/core';
import {NavBar} from '../nav-bar/nav-bar';
import {Themeboutton} from '../themeboutton/themeboutton';
import {Theme} from '../service/theme';

@Component({
  selector: 'app-header',
  imports: [
    NavBar,
    Themeboutton
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  theme = inject(Theme)
}
