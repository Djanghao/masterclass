# Python/JS/Go/C++ O( n ) sol. by list comprehension and iteration. [ With explanation ]

**Author:** brianchiang_tw
**Votes:** 33
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/493072/](https://leetcode.com/problems/fizz-buzz/solutions/493072/)

---

Method_#1
Python O( n ) sol. based on list comprehension

---

```
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        # list comprehension with string rule of FizzBuzz
        list_of_output = [ 'Fizz' * (not i % 3) + 'Buzz' * (not i % 5 ) or str(i) for i in range(1, n+1) ]
        
        return list_of_output
```

---

Method_#2
O( n ) sol. based on iteration. 

---
Python:

```
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        list_of_output = []
        
        for i in range(1, n+1):
            
            if i % 3 == 0 and i % 5 == 0:
                # i is multiple of both 3 and 5
                list_of_output.append('FizzBuzz')
            
            elif i % 3 == 0:
                # i is multiple of 3 only
                list_of_output.append('Fizz')
            
            elif i % 5 == 0:
                # i is mupltiple of 5 only
                list_of_output.append('Buzz')
            
            else:
                # i is neither multiple of 3 nor multiple of 5.
                list_of_output.append( str(i) )
                
        
        return list_of_output
                
```

---

Javascript:

```
var multipleOf = function( i , k ){
    return i % k == 0;
}

var fizzBuzz = function(n) {
    
    let output = [];
    
    for( let i = 1 ; i <= n ; i++ ){
        
        if( multipleOf(i, 3) && multipleOf(i, 5) ){
            output.push('FizzBuzz');
        
        }else if( multipleOf(i, 3) ){
            output.push('Fizz');
        
        }else if( multipleOf(i, 5) ){
            output.push('Buzz');
            
        }else{
            output.push( i.toString(10) );
        }
    }
    
    return output;
};
```

---

Go:

```
func multipleOf(i, k int) bool{
    return i % k == 0;
}

func fizzBuzz(n int) []string {

    result := make( []string, 0);
    
    for i := 1 ; i <= n ; i++{
        
        if( multipleOf(i, 3) && multipleOf(i, 5) ){
            result = append(result, "FizzBuzz")
            
        }else if( multipleOf(i, 3) ){
            result = append(result, "Fizz")
            
        }else if( multipleOf(i, 5) ){
            result = append(result, "Buzz")
            
        }else{
            result = append(result, strconv.Itoa(i) )
            
        }
    }
    
    return result
}
```

---

C++

```
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        
        vector<string> result;
        
        for( int i = 1; i <= n ; i++){
            
            if( multipleOf(i, 3) && multipleOf(i, 5) ){
                result.emplace_back("FizzBuzz");
                
            }else if( multipleOf( i, 3) ){
                result.emplace_back("Fizz");
                
            }else if( multipleOf( i, 5) ){
                result.emplace_back("Buzz");
                
            }else{
                result.emplace_back( std::to_string(i) );
            }
        }
        
        return result;
    }
private:
    bool multipleOf(int i, int k){
        return i % k == 0;
    }
};
```

---

Reference:

[1] [Python official docs about list comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)