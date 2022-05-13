# sort_int_array_js
 
 ### To sort an int array without any function  followed this steps:
 ### Main array: const arr = [9,6,2,1,4,8];
 ##### 1. I have created two auxiliar variables: aux1 and aux 2
 ##### 2. I have created two loos in order to loop the first position in the array which is 9 and
 ##### in the second loop I iterate the second element which is 6, saying:
 ##### if 9 is greather than 6 if yes I did a swap of the elements by using my auxliar variables:
 ##### In general words comparing each array element with the other elements one to one.
 ##### Tested with this scenarios:
 
### first iteration:
##### i = 0
##### j = 1

##### 6 9 2 1 4 8 
##### 2 9 6 1 4 8
##### 1 9 6 2 4 8
##### 1 9 6 2 4 8

### second iteration:
##### i = 1
##### j = 2

##### 1 6 9 2 4 8
##### 1 2 9 6 4 8
##### 1 2 9 6 4 8
##### 1 2 9 6 4 8

### third iteration:
##### i = 2
##### j = 3

##### 1 2 6 9 4 8
##### 1 2 4 9 6 8
##### 1 2 4 9 6 8

### fourth iteration:
##### i = 3
##### j = 4

##### 1 2 4 6 9 8
##### 1 2 4 6 9 8

### last iteration:
##### i = 4
##### j = 5

##### 1 2 4 6 8 9


