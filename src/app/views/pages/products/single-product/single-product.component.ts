import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  data: any;
  productData;
  Products = [
    {
      'id': '1',
      'producrName': 'الدرعية التاريخية',
      'productPicDes': [
        {
        'picPath': 'assets/products/d/dpic1.jpg',
        'description': 'بعد رحلة مثيرة وسط منطقة الدرعية التاريخية الثرية بالثقافة والحضارة العتيقة، تِذكار الدرعية التاريخية من مرفد،  هو المنتح الذي سيعود بك لذكريات هذا الرحلة، !كَل تلك المشاعر والذكريات مُخزنة في هذا الصندوق!'
        },
        {
          'picPath': 'assets/products/d/dpic2.jpg',
          'description': 'عبر فتحك لهذا الباب الخشبي، موسيقى نجد الشعبية ستبدأ لتشكل أمامك منظراً سحرياً،  يعود بك بالوقت وكأنك في وسط المنطقة'
        },
        {
          'picPath': 'assets/products/d/dpic3.jpg',
          'description': 'وأخيراً ، ليكتمل المشهد أمامك، رائحة العود الذي تشتهر به منطقة نجد، هو ما يُكمل منتج الدرعية التاريخية'
        }
    ],
      'productHeader': {
        'headerPic': 'assets/products/d/dheader.jpg',
        'headerDes': 'بين المباني الأثرية التي تجسد حضارة وتراث وموسيقى نجد الشعبية، ورائحة العود النجدي، يتكون منتج الدرعية التاريخية التذكاري، ليجسد لك تجربة متكاملة'
      }
    },
    {
      'id': '2',
      'producrName': 'جدة التاريخية',
      'productPicDes': [
        {
        'picPath': 'assets/products/j/jpic1.jpg',
        'description': 'بعد رحلة مثيرة وسط منطقة جدة التاريخية الثرية بالثقافة والحضارة العتيقة، تِذكار جدة التاريخية من مرفد،  هو المنتح الذي سيعود بك لذكريات هذا الرحلة، !كَل تلك المشاعر والذكريات مُخزنة في هذا الصندوق!'
        },
        {
          'picPath': 'assets/products/j/jpic2.jpg',
          'description': 'عبر فتحك لهذا الباب الخشبي، موسيقى الحجاز الشعبية ستبدأ لتشكل أمامك منظراً سحرياً،  يعود بك بالوقت وكأنك في وسط المنطقة'
        },
        {
          'picPath': 'assets/products/j/jpic3.jpg',
          'description': 'وأخيراً ، ليكتمل المشهد أمامك، زيت جدة العطري، والفواح برائحة النعناع المنعش، هو ما يُكمل منتج جدة التاريخية'
        }
    ],
      'productHeader': {
        'headerPic': 'assets/products/j/jheader.jpg',
        'headerDes': 'بين المباني الأثرية التي تجسد حضارة وتراث وموسيقى الحجاز الشعبية، ورائحة نعناعها، يتكون منتج جدة التاريخية التذكاري، ليجسد لك تجربة متكاملة'
      }
    },
    {
      'id': '3',
      'producrName': 'رجال ألمع',
      'productPicDes': [
        {
        'picPath': 'assets/products/r/rpic1.jpg',
        'description': 'بعد رحلة مثيرة وسط منطقة رجال ألمع الثرية بالثقافة والحضارة العتيقة، تِذكار رجال ألمع من مرفد،  هو المنتح الذي سيعود بك لذكريات هذا الرحلة، !كَل تلك المشاعر والذكريات مُخزنة في هذا الصندوق!'
        },
        {
          'picPath': 'assets/products/r/rpic2.jpg',
          'description': 'عبر فتحك لهذا الباب الخشبي الأزرق، موسيقى عسير الشعبية ستبدأ لتشكل أمامك منظراً سحرياً،  يعود بك بالوقت وكأنك في وسط المنطقة'
        },
        {
          'picPath': 'assets/products/r/rpic3.jpg',
          'description': 'وأخيراً ، ليكتمل المشهد أمامك، زيت رجال ألمع العطري، والخليط بين نبات الريحان والكادي، هو ما يُكمل منتج رجال ألمع'
        }
    ],
      'productHeader': {
        'headerPic': 'assets/products/r/rheader.jpg',
        'headerDes': 'بين المباني الأثرية التي تجسد حضارة وتراث وموسيقى عسير الشعبية، ورائحة عطرها الزكي، يتكون منتج رجال ألمع التذكاري، ليجسد لك تجربة متكاملة'
      }
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.data = params['product'];
      console.log(this.data);
      this.productData = this.Products.find(result => result.id === params['product']);
      console.log(this.productData);
      
    });
  }

}
