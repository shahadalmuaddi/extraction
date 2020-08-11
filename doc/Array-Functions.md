<div dir="rtl" align="right">


## دوال المصفوفات  ##

### هناك العديد من الدوال المستخدمة مع المصفوفات مثل: ###

<ul>
<li>دالة ()map</li>


تقوم هذي الدالة بالمرور على جميع عناصر المصفوفة عنصر عنصر وتطبيق الدالة `callback`  وأرجاع مصفوفة جديدة مثال للتوضيح:


<div dir="ltr" align="left">

```js
  let numbers=[1,2,3,4,5];
  let result = numbers.map(function(value){return value*3;});
  console.log(result);
```
</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">

```js
[ 3, 6, 9, 12, 15 ]
```
</div>

💡نلاحظ: أنه في المثال قام بالمرور على المصفوفة `numbers`   وأرجاع مصفوفة جديدة تحتوي على قيم العناصر بعد ضربها في ٣وتخزينها في المتغير `result`  
<li>دالة ()filter</li>


تقوم هذي الدالة بالمرور على جميع عناصر المصفوفة عنصر عنصر وأرجاع العناصر التي تطابق المعيار في الدالة`callback` في مصفوفة جديدة مثال للتوضيح:


<div dir="ltr" align="left">

```js
  let mixedArray=['red',2.9,'sara',true,'*',false,null,undefined];
  let result = mixedArray.filter(function(value){ return (typeof value)==='boolean'||(typeof value)==='string'; });
  console.log(result);
```
</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">

```js
[ 'red', 'sara', true, '*', false ]
```
</div>

💡نلاحظ: أنه في المثال قام بالمرور على المصفوفة `mixedArray` وأرجاع مصفوفة تطابق المعيار وهو أن نوع العنصر يكون `boolean` أو `string` وتخزينها في المتغير `result` 
<li>دالة ()forEach</li>


تقوم هذي الدالة بالمرور على جميع عناصر المصفوفة عنصر عنصر وتطبيق الدالة`callback`وتحفظ التعديل في المصفوفة ذاتها مثال للتوضيح: 
</ul>

<div dir="ltr" align="left">

```js
 let numbers=[1,2,3,4,5];
   numbers.forEach(function(value,index,arr){
    arr[index]=value*3;});
    console.log(numbers);
```
</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">

```js
[ 3, 6, 9, 12, 15 ]
```
</div>

💡نلاحظ: أنه في المثال قام بالمرور على المصفوفة `numbers`   وتعديل قيم عناصر المصفوفة بعد ضربها في ٣ في نفس المصفوفة `numbers`    


</div>
