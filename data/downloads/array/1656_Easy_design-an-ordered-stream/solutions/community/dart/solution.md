# Dart Solution

**Author:** AhmedWafik
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/3512152/](https://leetcode.com/problems/design-an-ordered-stream/solutions/3512152/)

---

```
class OrderedStream {
    late final List<String> data;
    int pointer = 0;

  OrderedStream(int n) {
      data = List<String>.filled(n, '');
  }
  
  List<String> insert(int idKey, String value) {
      data[idKey-1] = value;
      var result = <String>[];
      while(data[pointer]!='' ){
          result.add(data[pointer]);
          if( pointer+1 < data.length){ 
          pointer++;
          }else{
            break;
          }
      }
    return result;

  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream obj = OrderedStream(n);
 * List<String> param1 = obj.insert(idKey,value);
 */
```