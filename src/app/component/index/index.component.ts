import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xe = [
    // honda
    {name: 'Blade 110', price: 18000000, imgs: 'b_xeso_honda_blade110.png'},
    {name: 'Vision', price: 30000000, imgs: 'b_xetayga_honda_vision.png' },
    {name: 'Winner X', price: 46000000, imgs: 'b_xecontay_honda_winnerX.png' },
    {name: 'Rebel 1100 phiên bản 2022 DCT', price: 499000000, imgs: 'b_xenhapkhau_honda_rebel-1100.jpg' },
    // yamaha
    {name: 'EXCITER', price: 47000000, imgs: 'b_xecontay_yamaha_exciter.png' },
    {name: 'JUPITER FI', price: 30000000, imgs: 'b_xeso_yamaha_jupiterFI.png' },
    {name: 'LATTE', price: 37000000, imgs: 'b_xetayga_yamaha_latte.png' },
    {name: 'YFZ R3', price: 129000000, imgs: 'b_xenhapkhau_yamaha_yfz-r3.png' },
    //suzuki
    {name: 'GSX S150', price: 55000000, imgs: 'b_xecontay_suzuki_gxs150-bandit.png' },
    {name: 'Impulse', price: 29000000, imgs: 'b_xetayga_suzuki_impulse.png' },
  ];

}
