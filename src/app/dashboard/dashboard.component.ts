import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from "app/models/book";
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/services/logger.service';
import { DataService } from 'app/services/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;


  constructor(private _loggerService: LoggerService, private _dataService: DataService) { 
    this._loggerService.log('Creating the dashboard!');
  }

  ngOnInit() {
    this.allBooks = this._dataService.getAllBooks();
    this._dataService.getAllReaders()
      .subscribe(
        data => this.allReaders = data as Reader[],
        err => console.log(err), 
        () => this._loggerService.log('All done getting readers!')
    );
    this.mostPopularBook = this._dataService.mostPopularBook;

    this._loggerService.log('Done with dashboard initialization.');
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
