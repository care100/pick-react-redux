// import fetch from 'fetch-polyfill'

export function initSup() {
  return function (dispatch) {
    // dispatch(fetchingData(true));
    // return fetch(`https://api.github.com/users/${username}`)
    // return { type: 'increase' };
    dispatch(loading(true));
    return fetch('/getuserorders' , {credentials: 'include'})
    // return fetch('https://api.github.com/users/jiavan')
      .then(response => {
        return response.json()
        // [
        //   {name:'9商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'8商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'7商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'6商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'5商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'4商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'3商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'2商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'1商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'0商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'a商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'b商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'c商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'d商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'e商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'f商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'g商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'h商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'i商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'j商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'k商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'l商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'m商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'n商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'o商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'p商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'q商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'r商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'s商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'t商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'u商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'v商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'w商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'x商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'y商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'z商家名商家名商家名商家名商家名',addr:'9中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'aa商家名商家名商家名商家名商家名',addr:'8中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'bb商家名商家名商家名商家名商家名',addr:'7中国浙江省台州市温岭市xxxxxxx',jianhuo:false,jianwan: false},
        //   {name:'cc商家名商家名商家名商家名商家名',addr:'6中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true},
        //   {name:'dd商家名商家名商家名商家名商家名',addr:'5中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: false},
        //   {name:'ee商家名商家名商家名商家名商家名',addr:'4中国浙江省台州市温岭市xxxxxxx',jianhuo:true,jianwan: true}
        // ]
      })
      .then(json => {
        dispatch(supData(json))
      })
      .then(() => dispatch(loading(false)))
  };
}

export function initPro(name) {
  return function (dispatch) {
    dispatch(loading(true));
    return fetch('/getorders?name=' + name , {credentials: 'include'})
    // return fetch('/getorders?name=凯莉鞋业')
      .then(response => {
        return response.json()
        // [
        //   {id: 1,num:'9999',color:'黑色',size:36,numbers: 2,price: 30,order: 'DH000001',phone:13888888888,status: 0},
        //   {id: 2,num:'8888',color:'白色',size:36,numbers: 1,price: 33,order: 'DH000002',phone:13888888888,status: 1},
        //   {id: 3,num:'7777',color:'红色',size:36,numbers: 2,price: 32,order: 'DH000003',phone:13888888888,status: 1},
        //   {id: 4,num:'6666',color:'蓝色',size:36,numbers: 1,price: 31,order: 'DH000004',phone:13888888888,status: 1},
        //   {id: 5,num:'5555',color:'橙色',size:36,numbers: 1,price: 35,order: 'DH000005',phone:13888888888,status: 0},
        //   {id: 6,num:'4444',color:'粉红色',size:36,numbers: 2,price: 30,order: 'DH000006',phone:13888888888,status: 0}
        // ]
      })
      .then((json) => {
        dispatch(proData(json))
        for (var i = json.length - 1; i >= 0; i--) {
          if(json[i].status == 1){
            dispatch(updateSupStatus(true))
            break
          }
        }
      })
      .then(() => dispatch(loading(false)))
  };
}

export function updateSupStatus(data) {
  return {
    type: 'updateSupStatus',
    data: data
  }
}

export function showWill() {
  return {
    type: 'showWill'
  }
}

export function showHave() {
  return {
    type: 'showHave'
  }
}

export function supData(data) {
  return {
    type: 'supdata',
    data: data
  }
}

export function proData(data) {
  return {
    type: 'prodata',
    data: data
  }
}

export function changeSupStatus(supName) {
  return function (dispatch) {
    dispatch(loading(true));
    return fetch('https://api.github.com/users/jiavan')
    .then(response => {
      return true
    })
    .then((json) => dispatch(updateSupStatus(json)))
    .then(() => dispatch(loading(false)))
  };
}

export function changeProStatus(number) {
  return function (dispatch) {
    dispatch(loading(true));
    return fetch('/finshedorder?id=' + number[0].id , {credentials: 'include'})
    .then(response => response.json())
    .then(json => {
      if (json.state) {
        // var allCompleted = true;
        // for (var i = number[2].length - 1; i >= 0; i--) {
        //   if(i != number[1] && number[2][i].status == 0){
        //     allCompleted = false
        //   }
        // }
        // if (allCompleted) {
          dispatch(updateSupStatus(true))
        // }
        dispatch(updateProStatus(number[1]))
        return true
      } else {
        alert('操作失败，请重试！');
      }
    })
    .then(() => dispatch(loading(false)))
  };
}

export function updateProStatus(data) {
  return {
    type: 'updateProStatus',
    data: data
  }
}

export function loading(status) {
  return {
    type: 'loading',
    status: status
  }
}