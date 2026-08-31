# ⚡⚡⭐⭐Solution with dart ⚡⚡⭐⭐ 100% Beats 💕💕

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/5506302/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/5506302/)

---



# Code
```
class Solution {
  List<int> colorTheArray(int n, List<List<int>> queries) {

    //List Ch\u1EE9a m\xE0u 
    List<int> color = List.filled(n, 0);
    
    //List k\u1EBFt qu\u1EA3
    List<int> result = [];

    // B\u1ED9 \u0111\u1EBFm c\u1EB7p m\xE0u tr\xF9ng t\u1EEBng l\u1EA7n x\xE9t
    int counter = 0;


    for(int i = 0 ; i< queries.length; i++ ){

      //index
      int index = queries[i][0];
      //color
      int cl = queries[i][1];

      // X\xE9t t\u1EA1i v\u1ECB tr\xED index chu\u1EA9n b\u1ECB thay c\xF3 tr\xF9ng m\xE0u v\u1EDBi index ph\xEDa tr\u01B0\u1EDBc v\xE0 ph\xEDa sau n\xF3 kh\xF4ng, n\u1EBFu c\xF3 th\xEC gi\u1EA3m b\u1ED9 \u0111\xEAm c\u1EB7p m\xE0u tr\xF9ng xu\u1ED1ng 1
      if(index-1 >= 0 && color[index] != 0 && color[index - 1 ] == color[index]){
        counter--;
      }
      if(index + 1 < color.length  && color[index] != 0 && color[index] == color[index+1] ){
        counter--;
      }

      //thay m\xE0u
      color[index] = cl;

       // X\xE9t t\u1EA1i v\u1ECB tr\xED index b\u1ECB thay c\xF3 tr\xF9ng m\xE0u v\u1EDBi index ph\xEDa tr\u01B0\u1EDBc v\xE0 ph\xEDa sau n\xF3 kh\xF4ng, n\u1EBFu c\xF3 th\xEC t\u0103ng b\u1ED9 \u0111\u1EBFm c\u1EB7p tr\xF9ng m\xE0u l\xEAn 1
       if(index-1 >= 0  && color[index] != 0  && color[index - 1 ] == color[index]){
        counter++;
      }
      if(index + 1 < color.length   && color[index] != 0 && color[index] == color[index+1] ){
        counter++;
      }


      //\u0110\u1EA9y b\u1ED9 \u0111\u1EBFm v\xE0o m\u1EA3ng k\u1EBFt qu\u1EA3
      result.add(counter);
    }
    return result;
  }
}
```