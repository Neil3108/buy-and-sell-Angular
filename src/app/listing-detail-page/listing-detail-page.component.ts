import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // get value of the URL
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Gets ID
    this.listing = fakeListings.find(listing => listing.id === id)
  }

}
