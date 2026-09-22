import { Component,inject } from '@angular/core';
import {Theme} from '../service/theme';

@Component({
  imports: [],
  selector: 'app-themeboutton',
  styleUrl: './themeboutton.css',
  templateUrl: './themeboutton.html',
})
export class Themeboutton {
  theme = inject(Theme);
}
