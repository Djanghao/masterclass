# Dart 100% 🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3095318/](https://leetcode.com/problems/snakes-and-ladders/solutions/3095318/)

---



If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB



# Code
```
class Solution {
  int snakesAndLadders(List<List<int>> board) {
      int n= board.length, goal= n*n, res= 0;
      List<int> q=[1] ;
      while(q.isNotEmpty){
          int s= q.length; 
          res++;
          for(int i=0; i<s; i++){
              int x=q.removeAt(0);
              for(int j=1; j<=6; j++){
                  int y= x+j;
                  if(y>goal)continue;
                  int r= (y-1)~/n, c= (y-1)%n ;
                  int revR= n-1-r , revC= r%2==0 ? c : n-1-c ;
                  int v= board[revR][revC];
                  if(v==0)continue ;
                  if(v>0)y=v;
                  if(y==goal)return res ;
                  board[revR][revC] = 0;
                  q.add(y);
              }
          }
      }
      return -1 ;
  }
}
```



Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)