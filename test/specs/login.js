
//var faker = require('faker/locale/ja');
var fakerEn = require('faker');
describe('webdriver.io page', function (){
    it('should have the right title',   function () {
        //browser.url('https://www.seleniumeasy.com/test/bootstrap-dual-list-box-demo.html') 
        browser.url('http://119.82.96.68/kinder-web/')
        //input
        $('#__BVID__14').setValue("demo@kinder.com")
        $('#__BVID__19').setValue("12345678")
        //click on submit with xpath
        let SubmitButton =$('//*[@id="background"]/div/div/div/div/div[2]/div/div/form/div[2]/div[1]/button');
        SubmitButton.click();
        browser.pause(3000)
        //screenshot
        let screens = ['http://119.82.96.68/kinder-web/#/admin/nursery/',
        'http://119.82.96.68/kinder-web/#/admin/nursery/new',
        'http://119.82.96.68/kinder-web/#/admin/company/new',
        'http://119.82.96.68/kinder-web/#/admin/company/',
        'http://119.82.96.68/kinder-web/#/admin/industry',
        'http://119.82.96.68/kinder-web/#/admin/sales/',
        'http://119.82.96.68/kinder-web/#/admin/sales/receipt',
        'http://119.82.96.68/kinder-web/#/admin/agent',
        'http://119.82.96.68/kinder-web/#/admin/agent/new',
        'http://119.82.96.68/kinder-web/#/admin/agent/reward',
        'http://119.82.96.68/kinder-web/#/admin/product',
        'http://119.82.96.68/kinder-web/#/admin/product/new',
        'http://119.82.96.68/kinder-web/#/admin/notification',


        ];
   
        
        let screensize = ['768,1024','360,640','411,823','320,568','365,667','414,736','1024,1366'];
        for (i = 0; i < screensize.length; i++) {
            let size = screensize[i].split(",");
            browser.setWindowSize(parseInt(size[0]),parseInt(size[1]))
            for (var j=0; j < screens.length;j++){
                browser.url(screens[j])
            console.log(screens[j] + "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
            browser.saveScreenshot('./test/Screenshot/image'+fakerEn.random.number()+'.png')
            browser.pause(3000)
            }  
            
        }
    })


        // var  links =    $('.list-group')

        //  links.$$('li').forEach(element => {
        //     var ttt =  element.getText();
        //     console.log(ttt);
        //     if (ttt=='Porta ac consectetur ac'){
        //         element.click()
                
        //         console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
        //         return;

        //     }
               
        
       // })


  
       });
      
        

       

       //await  .click()
       // expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');



    


