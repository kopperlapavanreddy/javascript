
// var sub = "Reactjs"
// var wish = `wellcom to ${sub}`;
// console.log(wish);

// var tble_name = "emplyees"
// var sal = 50000;
// var sql_query =`select*from ${tble_name} where esal ${sal}`;
// console.log(sql_query);

// var u_name = "KTPS"
// var u_pwd  ="KTPS1"
// var login_query =`select*from ${tble_name} where uname ='${u_name}' and upwd = '${u_pwd}'`
// console.log(login_query);


// var num1 = 5n;
// var num2 = 2n;
// console.log(num1+num2);

// var n1 = 5;
// var n2 = 2;
// console.log(n1/n2);

// var obj = {
//      "key1" : "hello_1", "key2" : "hello_2", "key3" : "hello_3"
// }
// console.log(obj.key1,obj.key2,obj.key3);


// const arr = [20, 30, 40];
//      //  arr = [];
//      //  arr = [200, 300, 400];
//       arr[0] = 200;
//       arr[1] = 300;
//       arr[2] = 400;
//       console.log(arr);

//       arr.push(50);
//       arr.unshift(10);
//       console.log(arr);

//       arr[0] = 100;
//       arr[4] = 400;
//       console.log(arr);


// let arr = [10,20,30,40,50]
// // console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);

// console.log(arr[100],arr[-1],arr[-100]);

// let arr = [10,20,30,40,50,60,70,80,90,100];
//  arr.length = 0;
//  console.log(arr[0],arr[1],arr[9]);

// let arr = [10,20,30,40,50,60,70,80,90,100];
// delete arr[0];
// // console.log(arr);
// // console.log(arr.length);
// delete arr[4];
// delete arr[9];
// console.log(arr);
// console.log(arr .length);


// let arr = [10,20,30,40,50,60,70,80,90,100]
// delete arr[1];
// console.log(arr);

// delete arr[8];
// delete arr[6];
// console.log(arr);
// console.log(arr.length);

//  let arr = [10,20,30,40,50,60,70,80,90,100];
// //  for( i=0; i<arr.length; i ++ )
// //  console.log(arr[i]);

// // Arr.foreach(function(){});
// arr.foreach(function( element,index){
//      console.log(element);
// });

// let arr = [10,20,30,40,50,60,70,80,90,100];
// arr.forEach(function(element,index){
//      console.log(element,index);
// });

// let arr = [10,20,30,40,50,60,70,80,90,100];
// arr.forEach(function(element,index){
//      console.log(element,index);
// })

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*100 
//      })
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*100
//      })
// )

// console.log(
//      [100,200,300,400,500].map((element,index)=>{
//           return "$"+element
//      })
// )

// console.log(
//      [1,2,3,4,5,].map((element)=>{
//           return "$"+element
//      })
// )

// console.log(
//      [100,200,300,400,500].filter((element,index)=>{
//           return element>=200
//      })
// )

// console.log(
//      [1000,2000,3000,4000,5000].filter((element,index)=>{
//           return element >=3000
//      })
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*1000;
//      }).filter((element,index)=>{
//           return element <4000
//      })
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*1000;
//      }).filter((element,index)=>{
//           return element >=1000
//      })
// )

// console.log(
//      [1,2,3,4,5].reduce((firstvalue,nextvalue)=>{
//           return firstvalue+nextvalue
//      }).map((element,inde)=>{})
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*1000
//      }).filter((element,index)=>{
//           return element>=100
//      }).reduce((firstvalue,nextvalue)=>{
//           return firstvalue+nextvalue
//      })
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*1000
//      }).filter((element,index)=>{
//           return element>=1000
//      }).reduce((firstvalue,nextvalue)=>{
//           return firstvalue+nextvalue
//      })
// )

// console.log(
//      ["job oriented program", "to", "wellcome"].reduceRight((firstvalue,nextvalue)=>{
//        return firstvalue + nextvalue;
//      })
// )

// let arr = [2000,3000,4000,5000]
// arr.push(6000)
// arr.unshift(1000)
// arr.pop()
// arr.shift()
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(4,1)
// console.log(arr)                                 //[ 10, 20, 30,  40, 60, 70, 80, 90, 100]

// arr.splice(6,2)
// console.log(arr)                                 //[10, 20, 30, 40, 60, 70, 100]

// arr.splice(1,1)
// console.log(arr)                                  //[ 10, 30, 40, 60, 70, 100 ]

// arr.splice(2,1)
// console.log(arr)                                 //[10, 30, 60, 70, 100 ]

// arr.splice(4,1)
// console.log(arr)                                //[ 10, 30, 60, 70 ]

// arr.splice(1,0,20)
// console.log(arr)                                //[ 10, 20, 30, 60, 70 ]

// arr.splice(5,0,100)
// console.log(arr)                              //[ 10, 20, 30, 60, 70, 100 ]

// arr.splice(3,1,40,50,60)
// console.log(arr)                               //[10, 20, 30,  40, 50, 60, 70, 100]

// arr.splice(7,0,80,90)
// console.log(arr)                                  //[ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(
//      arr.findIndex((element,index)=>{
//           return lement ===1000;
//      })
// );

// let arr = [10,100,1000,10000,100000];

//     console.log(
//         arr.findIndex((element,index)=>{
//             return element === 1000;
//         })
//     );           


// let arr = [10,20,30,40,50,60,70,80,90,100]
//     console.log(
//      arr.findIndex((element,index)=>{
//           return element ===1000;
//       })
// );

// let arr = [10,100,1000,10000,100000];

//        console.log(
//            arr.findIndex((element,index)=>{
//                return element === 1000;
//            })
//       );           


// 
//    console.log(
//         arr.findIndex((element,index)=>{
//              return element === 1000;
//         })
//    )

//    console.log(
//         arr.findIndex((element,index)=>{
//              return element === 100000;
//         })
//    )

//    arr.splice(arr.findIndex((element,index)=>{
//         return element === 100
//    }),1)
//    console.log(arr)


//    arr.splice(arr.findIndex((element,index)=>{
//         return element === 10000
//    }),1)
//    console.log(arr)

// let arr = [10,100,1000,10000,100000];
// console.log(
//      arr.findIndex((element,index)=>{
//           return element === 1000
//      })
// )

// console.log(
//      arr.findIndex((element,index)=>{
//           return element === 100000
//      })
// )

// arr.splice(arr.findIndex((element,index)=>{
//      return element === 100
// }),1)

// console.log(arr)


// arr.splice(arr.findIndex((element,index)=>{
//      return element === 10000
// }),1)
// console.log(arr)


// let arr = [2,3,1,5,2,3];
// arr.forEach((element,index)=>{
//     console.log( arr.indexOf(element,index) );
// });


// let arr = [1,2,5,2,8,1]

// arr.forEach((element,index)=>{
//      console.log(arr.indexOf(element),index);
// })

// let arr = [1,2,5,2,8,1]

// console.log(
//      arr.filter((element,index)=>{
//           return arr.indexOf(element) === index;
//      })
// )

// let arr = [30,60,90,10,30,20,90]

// console.log(
//      arr.filter((element,index)=>{
//           return arr.indexOf(element) === index
//      })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10] )

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.length)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// delete arr[1]
// console.log(arr)
// console.log(arr.length)


// let arr = [10,20,30,40,50,60,70,80,90,100]

// for( i=0; i< arr.length; i++){
//      console.log(i)
//      console.log(arr[i])
// }

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.forEach(function(element,index){
//      // console.log(element)
//      console.log(element,index)
// })

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//           return element*100
//      })
// )

// console.log(
//      [100,200,300,400,500].filter((element,index)=>{
//           return element >=300
//      })
// )

// console.log(
//      [1,2,3,4,5].map((element,index)=>{
//            return element*1000 
//      }).filter((element,index)=>{
//           return element<=4000
//      })
// )


// console.log(
//      [1,2,3,4,5].reduce((firstvalue,nextvalue)=>{
//           return firstvalue+nextvalue;
//      })
// )

// console.log(
//      [ "job oriented training", "to", "wellcome"].reduceRight((firstValue,nextValue)=>{
//           return firstValue+nextValue;
//      })
// )

// console.log(
//      [10,50,20,40,30].sort((num1,num2)=>{
//           return num2-num1
//      })[3]
// ) 


/*clloction of hetrogeneous and index elements called as a arreys */

//collection o0f hetrogeneous and index element class;led as a arrays

// collection of hetrogeneous index elements called as a arrays 

// will represent array by using []

// we will access array by using indexes 
// index starts from 0

/*collection of hetrogeneous and index elements called as ANGLE_instanced_arrays

collection of hetrogeneous and index elements call as ANGLE_instanced_arrays

we will represent array by usin  []

we will access array elements by using index 
 index start from 0
*/

/*collection of hetrogeneous and indexs elements called as array 

we will represent array by using []

we will access array element by using index 

index stsrts from 0
*/

// collection of hetrogeouns and index elements called as a Array

// we wii represent array by using []

// we will acess array elment by unsing indexes 

// indexs starts with 0

// let arr = [1,2,3,4,5,6,7,8,9,10]
//  console.log(arr)
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11])

//is used to know the array of length 

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(arr.length)

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.length = 5
// console.log(arr.length)

// is used to know the length of array

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.length = 6
// console.log(arr.length)

// in order to delete the indipendent value then we need to go for delete function

//in order to delete the indipendent value then we need to go for the delete function

// let arr = [10,20,30,40,50,60,70,80,90,100]

// delete arr[2]

// console.log(arr)

// in order to delete the indipendent value then we need to go for dekete function 

// in order to delete the indipendent value then we need to go for deleyte function 

// let arr = [10,20,30,40,50,60,70,80,90,100]

// delete arr [5]
// delete arr [2]

// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]

// delete arr[2]
// delete arr[5]
// console.log(arr)
// console.log(arr.length)

//in order to delete the indipendent element then we need to for delete function

// let arr = [10,20,30,40,50,60,70,80,90,100] 

// delete arr [2]
// console.log(arr)
// console.log(arr.length)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// for( i=0; i< arr.length; i++)
// console.log(arr[i])

// let arr = [10,20,30,40,50,60,70,80,90,100]

// for (i=0; i<arr.length; i++)

// console.log(i)

// let arr = [10,20,30,40,50,60,70,80,90,100]
//  arr.forEach(function(element,index){
//      console.log(element,index)
//  })

// let arr = [10,20,30,40,50,60,70,80,90,100]

// for( i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.forEach(function(element,index){
//     console.log(element)
// })

// is used to maniplate the each and every array element then we need to go for map function
// is used to maniplate the each and every array element then we need to go for map function
// is use to maniplate the each and every array elenment then we need go for map function

// console.log(
//     [1,2,3,4,5,6,7].map((element,index)=>{
//         return element*1000
//     })
// )
// console.log(
//     [1000,2000,3000,4000,5000,6000,7000].map((element,index)=>{
//         return "$"+ element
//     })
// )

// is used to maniplate the each and every array element we need to go for map function
// is used to maniplate the eachh and evset array array element then we need to go for map function

// console.log(
//     [1,2,3,4,5,6,7,].map((element,index)=>{
//         return element*1000
//     })
// )

// console.log(
//     [1000,2000,3000,4000,5000,6000,7000].map((element,index)=>{
//         return "$" + element
//     })
// )

// is used to apply the condition then we need to go for filter function
// is used to apply the condtion then we need to go for filtr function
// is udsed apply the condiyion then we needgop for the filtrr functionb

// let arr = [100,200,300,400,500].filter((element,index)=>{
//     return element <400
// // })

// console.log(
//     [100,200,300,400,500].filter((element,index)=>{
//         return element >400
//     })
// )

// console.log(
//     [1,2,3,4,5,].map((element,index)=>{
//         return element*1000
//     }).filter((element,index)=>{
//         return element <4000
//     })
// )


// is used find sum of array element then we need go for reduce function

// is used to find the sum of array element then we need to go for reduce function

// console.log(
//     [1,2,3,4,5].reduce((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// console.log(
//     [1,2,3,4,5].reduce((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element*1000
//     }).filter((element,index)=>{
//         return element>=1000
//     }).reduce((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// is use to find sumation from right to left then we need to gpo for reduce right
// is used to find the sumation from right to left thn we beed to go fopr reducrright function
// is used to find the sumatuin from right to left 

// console.log(
//     [ "job oriented training", "to", "wellcome"].reduceRight((firstValue,nextvalue)=>{
//         return  firstValue+nextvalue
//     })
// )

// console.log(
//     ["job oriented training","to","wellcome"].reduceRight((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// is used add the element at end of the Array
// is used to add the element at the end of the Array
// it used to add the element at athe end of the array

// let arr = [10,20,30,40,50,60,70,80,90,]
//    arr.push[100];
//    console.log(arr)

// let arr = [20,30,40]
// arr.push(50)
// console.log(arr)

// let arr = [20,30,40,50]
// arr.unshift(10)
// console.log(arr)

// let arr = [10,20,30,40,50]
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)


// is used add and remove an element at any position 
// is used add or remove an element at any position then we need to go for the splice function 

// is used to remove or add an element at any position
// is used to remove or add an element at any position we need go for splice functon 

//is used remove or add an element at any positiopn then we need to go for spice function

// is used to remove or add an element at any position then we need to go for splice function
// is used remove or add an element at any position then we need go for splice function 

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.splice(3,4,40,50,60,70)
// console.log(arr)

// used know the index of perticular element then we need to go for find index function
// is used to know the index of perticular element then we need to go for find index function

//is used know the index of perticular element then we need go for find index function

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(
//     arr.findIndex((element, index)=>{
//         return element === 50
//     })
// )

//is used to know the index of pirticular element then we need go for findex of find index function 

// is uused to know the index of pirticular element then we need go for findindex function

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 50
//     })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(
//     arr.findIndex((element,index)=>{})
// )

// const a = [1,2,3,4,5]
// a.splice(1,2)
// console.log(a)
// is used to wont creat index to repeated elements then we need to go for index 
// is used to wont cresat indexws to repeated element then we need to go gor index of elelemt 
// is iused to wont creat indexs to reapted elelemet then we need to go for index element then
// is used to wont creat indexes to repewated element then we need go for indexof function

// let arr = [1,2,3,1,2,3]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })



// let arr = [2,3,1,5,2,3];
// arr.forEach((element,index)=>{
//     console.log(arr.indexof(element))
// });


// let arr = [2,3,1,5,2,3];
// arr.forEach((element,index)=>{
//     console.log( arr.indexOf(element),index );
// });



// let arr = [1,2,3,1,2,3]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })


// let arr = [1,2,3,4,1,3,4]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })


// let arr = [10,20,30,10,20,30]
// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )


// let arr = [10,20,30,10,20,30]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

// let arr = [30,60,90,10,30,20,90]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )


// is used to wont creat index to repeated element then we need to go for indexof function

// is used to wont crested index to repeated to index element then we need go for index of function

// is used to wont creat index to repeated element then we nedd to go for index of function

// is used to wnt creat index to repeated element then we need go for indexof function


// let arr = [1,2,3,1,2,3]

// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element))
// })


// let arr = [10,20,30,10,40,30]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element))
// })


// let arr = [10,20,30,10,20,30]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

// if atleast one element satisfies the condition then it will true other wise false 

// if atleast one element satisfies the condition then it will true other wise false 

// if atleast one element satisfies the condition then it will true otherwise false
// if atleast one element satisfies the condition then it will true other wise false 


// console.log(
//     [10,20,30,40,50].some((element,index)=>{
//         return element <=10
//     })
// )

// console.log(
//     [100,200,300,400,500,600,700,800].some((element,index)=>{
//         return element <100
//     })
// )

// if all elements satisfies the condition then it will true other wise false
// if all elements satisfies the condition then it will true other wise false 
// if all elements satisfies the condition then it will true othaer wise fakse 

// console.log(
//     [10,20,30,40,50,60,70,80].every((element,index)=>{
//         return element >=10
//     })
// )


// check element exist or not then we need go for include function
// check element exist are not then we need go for include function 
// check element exist are not then we need go for include function 
// check element exist are not then we need go for include function 

// console.log(
//     ["angular","react","vuejs","nodejs","mongodb"].includes("react")
// )

// console.log(
//     [10,20,30,40,50,60,70,80,90,100].includes(50)
// )

// console.log(
//     ["angular","react","vuejs","mongodb","nodejs"].includes("mongodb")
// )

// console.log(
//     [10,20,30,40,50,60].find((element,index)=>{
//         return element === 70
//     })
// )

// is used to check the element exist or not 

// is useds to chrck the elemet exist or 

// console.log(
//     ["angular","react","vuejs","mongodb","nodejs"].includes("vuejs")
// )
 

// let arr = [10,20,30,40,50,6,70,80,90,100]
// arr.copyWithin(3)
// console.log(arr)


// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.copyWithin(3,7)
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.copyWithin(2,4,7)
// console.log(arr)

//in to arrage the data ascending order or decending order then because of that reason we can called sort function
//in order to arrange the data ascending order ior decending order then because of that reason we called sort function

// console.log(
//     [50,40,20,10,30,40].sort((num1,num2)=>{
//         return num2-num1
//     })[1]
// )

//in order to arrange the data ascending order or decending order then that reason we can called as sort function

// console.log(
//     [20,50,30,40,10].sort((num1,num2)=>{
//         return num1-num2
//     })[1]
// )

/*slice function is used to filter the DataCue
slice function is used to filter the data 
slice function is used to filter rthe data 
slice function is used to filter thae data 
*/

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(arr.slice(2,8))

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]
// console.log([...arr1,...arr2])


// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(...arr.slice(5,10),...arr.slice(0,5))

// let arr1 = [10,20,30,40,50]
// let arr2 = [60,70,801,90,100]
// console.log([...arr1,...arr2])

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(...arr.slice(5,10),...arr.slice(0,5))

// let arr = [10,20,30,40,50,]
// console.log(arr.fill(100))
// console.log(arr.fill(200,1))
// console.log(arr.fill(300,2,4))
// console.log(arr.fill(400,3,4))
// console.log(arr.fill(500,4,5))

// let arr = [10,20,30,40,50]

// console.log(arr.fill(100))
// console.log(arr.fill(200,1))
// console.log(arr.fill(300,2))
// console.log(arr.fill(400,3))
// console.log(arr.fill(500,4))

 //used to check element exist are not

//  console.log(
//      [10,20,30,40,50,60,70,80].find((element,index)=>{
//          return element === 20
//      })
//  )

// console.log(
//  [10,20,30,40,50,60].find((element,index)=>{
//      return element === 40
//  })

// )

//is used to wont creat index to repeated element then we need to go for indexof function
//is used to wont created index to repeated element then we nedd to go for the index of function

// let arr = [10,20,30,10,20,30]

// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })

// let arr = [1,2,3,1,2,3]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })

// let arr = [10,20,30,10,20,30]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

// let arr = [1,2,3,1,2,3]

// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })

// let arr = [10,20,30,10,20,30]
// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

//is used to know the index of pirticular element then we need go for find index function

// let arr = [10,100,1000,10000,100000]

// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 100
//     })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 50
//     })
// )
// used to find the sumstion from right to left 
// used to find the sumstion from right to leftused to find he sumstion from right to left

// console.log(
//    ["mr pavan kumar reddy", "to" , "wellcome" ].reduceRight((firstValue,nextvalue)=>{
//        return firstValue+nextvalue 
//    })
// )

// //is used add element end of the Array

// let arr = [10,20,30,40]
// arr.push(50)
// console.log(arr)
// //is used add the element at begeining of the array
// arr.unshift(10)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)


// let arr = [10,20,30,40,50,60,70,80,90,100]

// delete arr[2]
// console.log(arr)

//is used to know the length of array

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr.length)
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11])


// is used to apply the condition then we need to go for filter function

// console.log(
//     [10,20,30,40,50,60].filter((element,index)=>{
//         return element<50
//     })
// )

//is used remove or add element then we need to go for splice function

// let arr = [10,20,30,40,50,60,70,80]
// arr.splice(1,1,10)
// console.log(arr)

//if atleast one element satisfies the condition then it will true other wise flase

// console.log(
//     [10,20,30,40,50].some((element,index)=>{
//         return element >10
//     })
// )

//is uused to check element exist or no 

// console.log(
//     [10,20,30,40,50].find((element,index)=>{
//         return element == 10
//     })
// )

//is used to filter the data

//let arr = [10,20,30,40,50]

//Assignment
//let arr1 = ["Hello_1","Hello_2"];
//O/P : ["Hello_2","Hello_1"]
//O/P : ["1_olleH","2_olleH"]
//O/P : ["2_olleH","1_olleH"]

//let arr1 = ["Hello_1","Hello_2"];

// it is used to repeat the string then we need to go for repeat function 

// it is used to repeat the string then we need go fot the repeat function 

//it is used to repeat the string then we need to go for repeat function

//it is used to repeat the string then we need to go for repeat function

// console.log(
//     "hello".repeat(5)
// )

// console.log(
//     "hello".repeat(2)
// )

//it is used to repeat string then weneed to go for repeat function



// console.log(
//     "hello".repeat(10)
// )

// console.log(
//     ["hello"].repeat(10)
// )

// in order to reverse the array element then we neede go for revers function
// in order to reverse the array element then we need go for reverse functioninorder to reverse the array
//  function then we need to go for reverse function

// console.log(
//     [10,20,30,40,50].reverse().join(",")
// )

// console.log(
//     Array.from("hello").reverse().join()
// )

// in order to reverse the array element then we needto go for reverse function 

// in order to reverse the array element then we need to go for reverse function

// combination of  map function and flat function technically we can called flat map function
// combination of map function flat function technically we can called flatmap function 

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]

// console.log(
//     arr1.map((element,index)=>{
//         return [element,arr2[index]]
//     })
// )

// console.log(
//     arr1.flatMap((element,index)=>{
//         return [element,arr2[index]]
//     }).reverse().join()
// )

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]

// console.log(
//     arr1.flatMap((element,index)=>{
//         return [element,arr2[index]]
//     })
// )

//used to convert multidimentional array to single dimaentional array
//used to convert multidimaentional array to single dimentional array 
//used to convert multidimentional array to single dimentional array

// let arr = [[1],[2],[3],[4],[5]]

// console.log(arr.flat(1))

//used to convert multidimentional array to single dimentional array 

// let arr = [[1],[2],[3],[4],[5]]
// console.log(arr.flat(1))

// let arr1 = [[[[[[[[[[[1]]]]]]]]]],[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]],[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]];
//     console.log( arr1.flat(Infinity) );

//used to fill the data 

// let arr = [10,20,30,40,50]

// console.log(arr.fill(100))
// console.log(arr.fill(200,1))
// console.log(arr.fill(300,2))
// console.log(arr.fill(400,3))
// console.log(arr.fill(500,4))

//used fill the data of array
// let arr = [10,20,30,40,50]
// console.log(arr.fill(100))
// console.log(arr.fill(200,1))
// console.log(arr.fill(300,2))
// console.log(arr.fill(400,3))
// console.log(arr.fill(500,4))


//"...."called as a spred operater
//"..." called as a spred operater

// let arr = [10,20,30]
// let arr1 = [40,50,60]
// console.log([...arr,...arr1])

//used to filter the data
//used to filter the data
//used to filtervthe datav 
//used to filter the data

// let arr = [10,20,30,40,50,60,70,80,90,100]


// console.log(arr.slice(4,6))


//is used to delethe independent element then we need go for delete function

// let arr = [10,20,30,40,50,60,70,80,90,100]

// delete arr[1]

// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(
//     arr.forEach((element,index)=>{
//         return element 
//     })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.forEach((element,index)=>{
//     console.log(element,index)
// })
//if youn want to itarate array we one loop for loop
//if you want to itarate array we one loop for loop

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.forEach((element,index)=>{
//     console.log(element,index)
// })


// is used to apply the conditions then we need go for filter function
// is used apply the comnditions then we need to go for filter funcvtion

// console.log(
//     [10,20,30,40,50].filter((element,index)=>{
//         return element<30
//     })
// )

//is used to some the array element then we need to go for reduce function

// console.log(
//      [1,2,3,4,5].reduce((firstValue,nextValue)=>{
//          return firstValue+nextValue
//      })
// )
                    
                    //some
                      
// if satisfies atleast one element then we to go for some function
// if atleast satisfies the one elementthen it will true otherwise false 
// if atleast satisfies the one element then it will true otherwise false

// console.log(
//     [10,20,30,40,50].some((element,index)=>{
//         return element <10
//     })
// )
         

               //map

// is used to maniplate the each and every array element then we need go for map function

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element *1000
//     })
// )

// console.log(
//     [1000,2000,3000,4000,5000].map((element,index)=>{
//         return "$" + element
//     })
// )
 
                     //splice


  // //is used to remove or add array element then we need to go for splice function

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(1,2)
// console.log(arr)

                        //index of

//is used to wont create index repeated element

// let arr = [10,20,30,10,40,50,30]

// arr.forEach((element,index)=>{
//     arr.indexOf(element) === index
// })

// console.log(
//     arr.indexOf((element,index)=>{
//         return element === index
//     })
// )

// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })


// let arr = [10,20,30,10,20,30]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

// is used to wont creat index to repeated element 
// is used to wont creat index to repeated element then we need go for index of function

// let arr = [10,20,30,10,20,30]

// console.log(
//     arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
// )

// let arr = [10,20,30,10,20,30]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })

//is used to sum array element then we need go for reduce function

// console.log(
//     [1,2,3,4,5].reduce((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element*100
//     }).reduce((firstValue,nextValue)=>{
//         return firstValue+nextValue
//     })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.copyWithin(3)
// console.log(arr)

//flat 

// is used to convert multi dimentional array to singke dimentional array 
// is used to convert multi dimentional array to single dimentional array 
// is used to convert multi dimentional array to single dimentional array 
 

// let arr = [[1],[2],[3],[4],[5]]
// console.log(arr.flat(1));

// let arr1 = [[[[[[[[[1]]]]]]]]],[[[[[[[[[2]]]]]]]]],[[[[[[[[[3]]]]]]]]]

//is used to convert multi dimentional array to single dimentional 
//is used to convert multi dimentional array to single dimentiona array

// let arr = [[1],[2],[3],[4],[5]]

// console.log(arr.flat(1))

//combination of flat function and map function technically we called flatmap function
//combination of flat function and map function techniclly we called flat map function 
//combimnartiona of flat function and map functiobn technically we called flat map function

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]
// console.log(arr1.flatMap((element,index)=>{
//   return [element,arr2[index]]
// }))

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]
// console.log(
//   arr1.flatMap((element,index)=>{
//     return[element,arr2[index]]
//   })
// )

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]

// console.log(
//   arr1.flatMap((element,index)=>{
//     return [element,arr2[index]]
//   })
// )

// is used to convert multi dimentional array to single dimentional array 
// is used to convert multi doimentional array to single dimentional array
// is used to convert multi dimentional array to single dimerntional array 

// let arr = [[1],[2],[3],[4],[5]]
// console.log(arr.flat(1))

//combination of flat function and map function techniclly we called flatmap function
//combination of flat function and map function technically we called flat map function

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]
// console.log(
//   arr1.flatMap((element,index)=>{
//     return[element,arr2[index]]
//   })
// )

//in order to reverse array element then we need to go for reverse funcvtion
//in order to reverse the array element then we need go for reverse function
//in order to reverse the array element then we mneed go for reverse function

// console.log(
//   [10,20,30,40,50].reverse()
// )
//in oeder to reverse array element then we need go for reverse function 
//in order to reverse array element then we need go for reverse function 
//inordere to reverse array element themn we need go for re4verse function

// console.log(
//   [10,20,30,40,50].reverse()
// )

//we can string to array by usining frokm
//we can convert string to array by using from
//we can convert string to array by usoing from
//we can convert string to array by grom 
//we can convert string to array by using from 
//we can convert string to array by uusing fron 
//we can convert string ton array by usinhg from
// we convert string to array by using from

// console.log(
//   Array.from("Hello").reverse().join("")
// )

// console.log(
//   Array.from("Hello").reverse().join("")
// )

// is used to repeat the string 
// repeat function wont aplicable for array

// it is used to repeat te array 
// itb is used too repeat the arrayit is used to repeat array
// it is used to repeat the array repeat function not applicablr for array

// console.log(
//   "pavan".repeat(2)
// )

// console.log(
//   ("pavan" ).repeat(2)
// )

//is useed to convert multi dimentional array to single dimentional array
//is used to multi dimentional array to single dimentional array
//is used to multi dimentinal array to single dimentional array

// let arr = [[1],[2],[3],[4],[5]]
// console.log(arr.flat(1))

//combination of flat function and map function technically we called flatmap function
//combination of flat function and map function technically we called flatmap function

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]
// console.log(
//   arr1.map((element,index)=>{
//     return[element,arr2[index]]
//   })
// )

//is used to reverse the array element then we need go for reverse function
//is used to revers the array element then we need to go fpr reverse function

// console.log(
//   [10,20,30,40,50].reverse()
// )

// console.log(
//   [10,20,30,40,50].reverse()
// )

//is used to convert string to array 
//is usedto convert string to array
//is used to convert string to array

// console.log(
//   Array.from("hello").reverse().join("")
  
// )

//is used to repeat the string 
//is used to repeat teh string 
//is used to repeat the string
//is used to repeat the string 

// console.log(
//   "hello".repeat(5)
// )

//is used to remove the white space 
//used to removw the white space
//used to remove the white space
//used to remove the white space
//used to remove the white space 
/*
console.log(" hello " .trim().length)
//is used to remove tje white space at beginin
//is used to remove white space at begining
//is used to remove white space at beging 
console.log(" hello ".trimStart().length)
//is used to remove white space at end
//is used to remove white space at end
console.log(" hello ".trimEnd().length)
*/
/*
//is used to the white space's
console.log(" hello ".trim().length)
//is used to remove the white space at bening
console.log(" hello ".trimStart().length)
//is used to remove white space at end
console.log(" hello ".trimEnd().length)
*/

// console.log("ktps".padStart(10,"*"))   //******ktps
// console.log("ktps".padEnd(10,"*"))     //ktps******
// console.log("ktps".padStart(10,"#").padEnd(16,"#"))

// console.log("ktps".padStart(10,"$"))
// console.log("ktps".padEnd(10,"$"))
// console.log("pavan".padStart(10,"@").padEnd(20,"@"))

// let arr = [10,20,50,40,30,10,20,70,80,90,40,10,20,50,60,10,30]
//        // [0   1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16]
// console.log(arr.lastIndexOf(10))
// console.log(arr.lastIndexOf(20))
// console.log(arr.lastIndexOf(10,4))

//in order to split based on the saparater
//in oder to split based on the sa[aparater
//in order to split based on the saparater


// console.log( " wellcome to ktps", split("") );


// let arr = [10,20,30,10,20,30]
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element),index)
// })

{/* <script>
let table = document.createElement("table");
    for (i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        for (j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = (j + 1) * (i + 1);
            // td.innerHTML += (i * j) + ' '; same output if i/j = 1 & i/j < 11
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
</script> */}

/*
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
*/
// console.log(1 + + "2" + + "2");

/*
console.log(
    "welcome to ktps".substr(0,7)
)

console.log(
    "welcome to ktps".substr(8,2)
)

console.log(
    "welcome to ktps".substr(11,4)
)
console.log(
    "welcome to ktps".substr(6,3)
)
console.log(
    "welcome to ktps".substr(9,3)
)
console.log(
    "welcome to ktps".substr(0,1)
)
console.log(
    "welcome to ktps".substr(8,1)
)
*/
// console.log(
//     "welcome to ktps".substring(0,7)
// )
// console.log(
//     "welcome to ktps".substring(8,10)
// )
// console.log(
//     "welcome to ktps".substring(11,15)
// ) 

// console.log(
//     "welcome to ktps".substring(0,7)
// )
// console.log(
//     "welcome to ktps".substring(8,10)
// )
// console.log(
//     "welcome to ktps".substring(11,15)
// )//to extract the pirticular porstion of string 
//to extract the pirticular porstioin of string
// to extract the pirticular portion of string
// to extract the pirticular portion of string
// to extract the pirtixcular portion of string
// to extract the pirticular portion of string

//   w e l c o m e   t o    k   t   p   s
//   0 1 2 3 4 4 6 7 8 9 10 11  12  13  14

// console.log(
//     "welcome to ktps".substr(1,1)
// )
// console.log(
//     "welcome to ktps".substr(6,1)
// )
// console.log(
//     "welcome to ktps".substr(11,1)
// )
// console.log(
//     "welcome to ktps".substr(12,1)
// )
// console.log(
//     "welcome to ktps".substr(0,7)
// )
// console.log(
//     "welcome to ktps".substr(8,2)
// )
//to extrcat pirticular portion of string 
// to extract pirticular portion of string
//to extract pirticlur portion of string

// console.log(
//     "wellcom to ktps".substr(0,7)
// )
// console.log(
//     "wellcom to ktps".substr(8,2)
// )
// console.log(
//     "wellcom to ktps".substr(11,4)
// )
// console.log(
//     "wellcom to ktps".substr(1,1)
// )

//in order to split based on sapareter
//in order to split based on saparater
//in order to split based on saparater

// console.log(
//     "wellcom to ktps".split()
// )

//in order to split based on the saparater
//in order to split based on the saparater
//in order to split based on the saparater
//in order to split based on the saparater

//console.log("wellcom  to  ktps".split(""))


// let arr = [10,20,30,40,50,60,10,20,50,60,70,80,90,10]
// //         0  1  2  3  4  5  6  7  8  9  10 11 12 13

// console.log(arr.lastIndexOf(80))
// console.log(arr.lastIndexOf(10,8))
// console.log(arr.lastIndexOf(60,9))
// console.log(arr.lastIndexOf(10,9))
// console.log(arr.lastIndexOf(10,7))

// console.log("ktps".padStart(10,"#"))
// console.log("ktps".padEnd(10,"#"))
// console.log("ktps".padStart(10,"#").padEnd(16,"#"))


// console.log("pavan".padStart(10,"&"))
// console.log("pavan".padStart(10,"&"))
// console.log("pavan".padStart(10,"&").padEnd(20,"&"))

//is used to remove the white space
//is used to remove the white space
//is used to remove the white space 
//is used to remove the white space 
//is used to remove the white space

// console.log(
//     " hello ".trim().length
// )
// console.log(" hello ".trimRight().length)
// console.log(" hello ".trimEnd().length)

//is used to remove the white space 
//is used to remove the white space at begining
//is used to remove the white the white space at the end
//is used to remove the white space 
//is used to remove the white space at begining
//is used to remove th white space at the end 

// console.log(
//     "hello".repeat(10)
// )

// console.log(
//     "pavan".repeat(10)
// )

//is used to repeat the string 
//is used to the string
//is used to repeat the string
//is used to repeat the string
//is used to repeat the string
//is used to repeat the the string then we need to go for the repeat function

// console.log(
//     "barathi".repeat(10)
// )
// console.log(
//     ["barathi"].repeat(10)
// )

// repeat function is not aplicable for the array 
//repeat function won't applicable for the array
//repeat function function won't applicable for the array

//in order to reverse the array elements
//in order to reverse the array element then we need to go for the reverse function 
//in order to reverse the array element the we need go for the reverse function
//in order to reverse the array element then we neecd to go for reverse function

// console.log(
//     [10,20,30,40,50,60,70,80].reverse()
// )
// console.log(
//     [50,40,30,20,10].reverse()
// )
// console.log(
//     ["angular","react","node","vuejs","mongodb"].reverse()
// )

// console.log(
//     ("hello").from
// )

// console.log(
//     Array.from("hello").reverse().join("")
// )

//we can convert string to array then we need to go for from
//we can convert string to array then we need go for from
//we can convert string to array then we need to go for from

/*
console.log(
    [10,20,30,40,50].reverse()
)

console.log(
    Array.from("hello").reverse().join("")
)
*/

// is used to convert multi dimentional array to single dimentional array then we need go for flat function
//is used to convert multidimentional array to single dimentional array then we need to go for flat function

// let arr = [[10],[20],[30],[40],[50]]

// console.log(arr.flat(1))

//is used to conver multi dimentional array to single dimentional array then we need go for flat function

// let arr = [[10],[20],[30],[40],[50]]
// console.log(arr.flat(1))

//combination of flat function map function technically we called flatmap function
//combination flat function map function technically we called flat map functiom
//combination of flat function map function technically we called flat map functiomn
//combination of flat function map functon technically we called flatmap function

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]

// console.log(
//     arr1.flatMap((element,index)=>{
//         return [element,arr2[index]]
//     })
// )

//is used to convert multi dimentional array to single dimentional array 

// let arr = [[10],[20],[30],[40],[50]]

// console.log(
//     arr.flat(1)
// )

// let arr = [[10],[20],[30],[40],[50]]
// console.log(
//     arr.flat(1)
// )

//combination map function flat function technically we called flat map function 
//combination of flat function map function technically we called flat map function

// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]

// console.log(
//     arr1.flatMap((element,index)=>{
//         return[element,arr2[index]]
//     })
// )

//is used to fil the array element
//is used to fill the array element
//is used to the array element
//is used to fill the array element 
//is used to fill the array element

/*
let arr = [10,20,30,40,50]
console.log(arr.fill(100))
console.log(arr.fill(200,1))
console.log(arr.fill(300,2))
console.log(arr.fill(400,3))
console.log(arr.fill(500,4))
*/

//is used to concat one array elemnt to onther array element we need go for onctfunction

//is used to concat one array to onther array then we need to go for the concat function

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]
// console.log(
//     arr1.concat(arr2)
// )

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]

// console.log(arr1.concat(arr2))

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]

// console.log([...arr1,...arr2])

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(
//     ...arr.slice(5,10),...arr.slice(0,5)
// )

//is used to filter the data 
//is used to filter the data 
//is used to filter the data
//is used to filter the data then we nedd go for the slice function
//is used to filter the the data then we need to go for slice function
//is used to filter the data then we need go for the 

//is used to filter the data then we need go for the filter function
//is used to filter the data then we need go for the filter fumnction

// let arr = [10,20,30,40,50,60,70,80,90,100]
//          //0  1  2  3  4  5  6  7  8   9

// console.log(arr.slice(5,7))
// console.log(arr.slice(8,10))
// console.log(arr.slice(0,2))
// console.log(arr.slice(2,4))
// console.log(arr.slice(4,6))
// console.log(arr.slice(6,8))
// console.log(arr.slice(8,10))

//in order to arrange the dataascending order /decending order then we need to go for sort function
//in order to arrange the data ascending order /decending order
//in order to arrange the data ascening order /decending order then we need to go for sort function
//in order to arrange the asecending order /decending order then we need go for sort function
//in order to arrange the data asecending order /decending order then we need to go for sort function

// console.log(
//     [50,10,40,30,20].sort((num1,num2)=>{
//         return num1-num2
//     })
// )
// console.log(
//     [50,10,40,30,20].sort((num1,num2)=>{
//         return num2-num1
//     })
// )

//in order to arrange the asecending order /decending order then we need tp go for sort function

// console.log(
//     [50,10,40,20,30].sort((num1,num2)=>{
//         return num1-num2
//     })[1]
// )
// console.log(
//     [40,20,30,10,50].sort((num1,num2)=>{
//         return num2-num1
//     })[1]
// )

//is used to know the length of array
//is used to know the lenght of array
//is used to know the lenght of array

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.length=0
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10])
// console.log(arr.length)

//in order to delete the indipendent value then we need go for delete function
//in order to delete the indipendent value then we need go for delete function
//in order to delete the indipendent value then we need go for delete function

// let arr = [10,20,30,40,50,60,70,80,90,100]
// delete arr[3]
// console.log(arr)
// console.log(arr.length)

//is used to delete the indipendent value then we need to go for delete function
//is used to dlete the indipemndent value then we nedd to go for the delethe function

// let arr = [10,20,30,40,50,60,70,80,90,100]
// delete arr[5]
// console.log(arr)
// console.log(arr.length)

//delete keyword never release the memory that element replaced with undefined
//delete keyword never release the memory that element replaced with 

// if you want to iterate array we have one loop for lopp 
//if you want to iterate array we have one loop for loop
//if you want iterate array we havwe one loop for loop

// let arr = [10,20,30,40,50,60,70,80,90,100]
// for( let  i=0; i<arr.length; i++){
//     console.log(i)
//     console.log(arr[i])
// }

// let arr =[10,20,30,40,50,60,70,80,90,100]
// for( i=0; i< arr.length; i++){
//     console.log(i)
//     console.log(arr)
// }

//if you want to iterate array we have one loop for loop
//if you want to iterate array we have one loop for loop

// let arr =[10,20,30,40,50,60,70,80,90,100]
// for( i=0; i<arr.length: i++ ){

// }

// let arr = [10,20,30,40,50,60,70,80,90,100]

// for ( i=0; i< arr.length; i++){
//     console.log(i)
//     console.log(arr[i])
// }

// arr.forEach(function(){})

//arr.foreach(function(){})

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.foreach(function(element,index){
//     console.log(element)
// })

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.forEach(function(element,index){
//     console.log(element,index)
// })

//if you want to iterate the array element we have one loop for loop
//if you want to iterate array we have one loop for loop

//let arr = [10,20,30,40,50,60,70,80,90,100]
// for(i=0; i< arr.length; i++){
//     console.log(i)
//     console.log(arr[i])
// }

// arr.forEach(function(element,index){
//     console.log(element,index)
// })

// for( value of arr){
//     console.log(value)
// }

// for(value of arr){
//     console.log(value)
// }

//if you want to iterate the array we have one loop for loop
//if you want to iterate the array we have one loop for loop

//let arr = [10,20,30,40,50,60,70,80,90,100]
// for(i=0; i<arr.length; i++){
//     console.log(i)
//     console.log(arr[i])
// }

// arr.forEach(function(element,index){
//     console.log(element,index)
// })

// for(value of arr){
//     console.log(value)
// }

// for(value of arr){
//     console.log(value)
// }

//is used to manipalte each and every array elemnent then we need go for map function

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element*1000
//     })
// )

// console.log(
//     [ 1000, 2000, 3000, 4000, 5000 ].map((element,index)=>{
//         return "$" + element
//     })
// )

//is used to apply the conditions
//is used to appaly the conditions then we need go for filter function

// console.log(
//     [100,200,300,400,500].filter((element,index)=>{
//         return element >=200
//     })
// )

// console.log(1);
// setTimeout(()=>{console.log(2)},0)
// console.log(3)

// combination between producer and consumer called as a promises
// promisesare special javascript objects
// producer creats the promises 
// consumer creats the consumer
// promis is the fredefine class is usedto create the promos 
// then is the fredefine function is used to consume the promise 


// communication between producer and consumer called asa promises
// promises special javascript objects
// producer create the promis
// consumer consume the promis
// promis is the freedefine classes is used to create the promises
// consumer is the freedefine function is used consume the function


// let promise1 = new Promise((resolve,reject)=>{
//     resolve ("wellcome to pavan world");
// });
// promise1 .then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });


// let promise1 = new promise ((resolve,reject)=>{
//     resolve("wellcome to pavan home");
// });

// promise1 .then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });


// let promise1 = new Promise((resolve,reject)=>{
//     resolve ("wellcome to pavan world");
// });
// promise1 .then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });


// let promise1 = new Promise((resolve,reject)=>{
//     resolve("welcome to pavan world");
// });

// promise1.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });

// Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             resolve("hello")
//     },5000)
// });

// Promise1.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });

// Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("pavan");
//     });
// });
// Promise1.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });

// Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("pavan");
//     },0);
// });

// Promise2 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("babu");
//     },5000);
// });

// Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("kopperla");
//     },10000);
// });

// Promise1.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });

// Promise2.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });

// Promise3.then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// });


// Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("pavan");
//     },25000);
// });

// Promise2 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error");
//     },5000);
// });

// Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("kopperla");
//     },10000);
// });

// Promise.allSettled([Promise1,Promise2,Promise3]).then((PosRes)=>{
//     console.log(PosRes);
// },(ErrRes)=>{
//     console.log(ErrRes);
// })
// Promise1 = new Promise((resolve,reject)=>{
//      resolve("hello_1");
// });
// async function my_fun(){
//     const res = await Promise1;
//     console.log(res);
// }
// my_fun();

// Promise = new Promise((resolve,reject)=>{
//     resolve("pavan")
// });
// async function my_fun(){
//     const res = await Promise;
//     console.log(res)
// }
// my_fun();

// Promise = new Promise((resolve,reject)=>{
//     resolve("kopperla");
// });
// async function my_fun(){
//     const res = await Promise;
//     console.log(res);
// };
// my_fun();

// Promise1 = new Promise((resolve,reject)=>{
//     resolve("kopperla");
// });
// Promise2 = new Promise((resolve,reject)=>{
//     resolve("pavan");
// });
// async function my_fun(){
//     const res1 = await Promise1;
//     const res2 = await Promise2;
//     console.log(res1);
//     console.log(res2);
// };
// my_fun();

// calling one function to anthor function as an argument called as callback function
// callining one function to anthor function as an argument called as acalback function
//passining one function to anher function as an argument called as a callback function
// passining one function to anther function as an argument called as a callback function

// function fun_one(arg1){
//    console.log(arg1());
// };
// fun_one(function fun_two(){
//     return "pavan";
// });

//passining one function to anther function as an argument called as a callback function

// function fun_one(arg1){
//        console.log(arg1())
// };
// fun_one(function fun_two(){
//     return "kopperla";
// });

//passining one function to anther function as an argument called as acallback function

// function fun_one(arg1){
//         console.log(arg1())
// };
// fun_one(function fun_two(){
//     return "reddy";
// });


// function fun_one(arg1,arg2){
//         console.log(arg1(),arg2())
// };
// fun_one(function fun_two(){
//     return "pavan"
// },
//         function fun_three(){
//             return "reddy"
//         });


// function fun_one(arg1){
//         console.log(arg1())
// };
// fun_one(function fun_two(){
//     return "pavan"
// });

// function  fun_one(arg1,arg2){
//    console.log(arg1(),arg2())
// };
// fun_one(function fun_one(){
//     return "kopperla pavan"
// },
//         function fun_three(){
//             return "kumar Reddy"
//         });


// function fun_one(arg1,arg2,arg3){
//    console.log(arg1(),arg2(),arg3());
// };
// fun_one(()=>{return "kopperla pavan"},
//         ()=>{return "kumar"},
//         ()=>{ return "Reddy"});

// function fun_one (arg1,arg2,arg3){
//       console.log(arg1(),arg2(),arg3());
// };
// fun_one(()=>{return "kopperla pavn"},
//         ()=>{ return "kumar"},
//         ()=>{ return "Reddy"});

// function fun_one(arg1,arg2){
//        return arg2(arg1*100);
// };
// fun_one(10, (result)=>{
//     console.log(result);
// });


// function fun_one(arg1,arg2){
//     return arg2(arg1*100);
// };
// fun_one(10, (result)=>{
//     console.log(result);
// });

// function add(num1,callback){
//   return callback (false,num1+5);
// };
// function sub(num1,callback){
//   return callback(false,num1-3);
// }
// function mul(num1,callback){
//   return callback(false,num1*2);
// }
// function div(num1,callback){
//     return callback(false,(num1/2)-2)
// }


// add(5, (error,addRes)=>{
//     if(!error){
//         sub(addRes,(error,subRes)=>{
//             if(!error){
//                 mul(subRes,(error,mulRes)=>{
//                     if(!error){
//                         div(mulRes,(error,divRes)=>{
//                             if(!error){
//                                 console.log(divRes)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

// passining one function to anther function as an argument called as acallback function
// passing one function to anther function as an argument called as acallnback function

// function fun_one (arg1){
//  console.log(arg1())
// };
// fun_one(function fun_two() {
//     return "pavan"
// })


// function fun_one(arg1){
//     console.log(arg1())
// };
// fun_one(function fun_two(){
//     return "pavan"
// })

// function fun_one(arg1,arg2){
//   console.log(arg1(),arg2())
// };
// fun_one(function fun_two(){
//     return "pavan"
// },
//         function fun_three(){
//             return "reddy"
//         });
    
// function fun_one(arg1,arg2,arg3) {
//     console.log(arg1(),arg2(),arg3());
// };
// fun_one(()=>{return "kopperla pavan"},
//         ()=>{ return "kumar"},
//         ()=>{return "Reddy"});

// function fun_one(arg1,arg2) {
//     return arg2(arg1*100)
// };
// fun_one(10,(result)=>{
//     console.log(result)
// });

// function fun_one(arg1,arg2){
//   return arg2(arg1*100)
// };
// fun_one(10,(result)=>{
//     console.log(result)
// })

// function add(num1,callback) {
//     return callback(false,num1+5)
// };
// function sub(num1,callback){
//     return callback(false,num1-3)
// }
// function mul(num1,callback){
//     return callback(false,num1*2)
// }
// function div(num1,callback){
//     return callback(false,(num1/2)-2)
// }
// add(5,(error,addRes)=>{
//     if(!error){
//         sub(addRes,(error,subRes)=>{
//             if(!error){
//             mul(subRes,(error,mulRes)=>{
//                div(mulRes,(error,divRes)=>{
//                    console.log(divRes)
//                })
//             })
//             }
//         })
//     }
// })


function add(num1){
    return new Promise((resolve,reject)=>{
        resolve(num1+5)
    })
}
function sub(num1){
    return new Promise((resolve,reject)=>{
        resolve(num1-3)
    })
}
function mul(num1){
    return new Promise((resolve,reject)=>{
        resolve(num1*2)
    })
}
function div(num1){
    return new Promise((resolve,reject)=>{
        resolve((num1/2)-2)
    })
}
async function my_fun(){
    let res1 = await add(5)
    let res2 = await sub(res1)
    let res3 = await mul(res2)
    let res4 = await div(res3)
    console.log(res1,res2,res3,res4)
};
my_fun()

