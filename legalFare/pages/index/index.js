Page({


  /**
   * 页面的初始数据
   */
  data: {
    fei:'',
    fei2:''
  },

  formSubmit:function(e){
    // 获得submit传了来的对应event（e)的数据
    var a=Number(e.detail.value.input)
    var b=0
    var c=0
    
    if (a<=10000)
    {
      b=50;
    }
    else if(a<=100000&&a>10000)
    {
      b=(0.025*a-200);
    }
    else if(a<=200000&&a>100000)
    {
      b=0.02*a+300;
    }
    else if (a <= 200000 && a > 100000) {
      b = 0.015 * a + 1300;
    }
    else if (a <= 1000000 && a > 500000) {
      b = 0.01 * a + 3800;
    }
    else if (a <= 2000000 && a > 1000000) {
      b = 0.009 * a + 4800;
    }
    else if (a <= 5000000 && a > 2000000) {
      b = 0.008 * a + 6800;
    }
    else if (a <= 10000000 && a > 5000000) {
      b = 0.07 * a + 11800;
    }
    else if (a > 10000000) {
      b = 0.005 * a + 41800;
    }
    
    c=0.5*b
    this.setData({
      fei:b.toFixed(2),
      fei2:c.toFixed(2),
    })
  },
  formReset:function(){
    this.setData({
      fei:"",
      fei2:"",
    })
  }
})