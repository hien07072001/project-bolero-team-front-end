import { Component, OnInit } from '@angular/core';
import {SongService} from '../../service/song.service';
import {Song} from '../../interface/Song';
import {SearchService} from '../../service/search.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  constructor(private songService: SongService,
              private searchServe: SearchService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe( data => {
      this.songList = data;
    }, error => {
      console.log(error);
    });
  }
  searching(){
    // if (this.value !== ''){
    //   this.songList = this.songList.filter( res => {
    //     return res.name.toLocaleLowerCase().match(this.value.toLocaleLowerCase());
    //   });
    // }else if (this.value === ''){
    //   this.ngOnInit();
    // }
  }

  delete(id: number) {
    this.songService.deleteSong(id).subscribe( () => {
      console.log(' delete success');
      this.songService.getAllSongs();
      // this.router.navigate(['list'], {relativeTo: this.route});
    }, error => {
      console.log('delete failed');
    });
  }
}
