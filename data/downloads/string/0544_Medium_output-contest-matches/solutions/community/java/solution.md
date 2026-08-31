# Java | Intuitive Approach | Using Deque

**Author:** prashul
**Votes:** 6
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/1115710/](https://leetcode.com/problems/output-contest-matches/solutions/1115710/)

---

Intution - Take the first and last, Deque is the datastructure which supports that-->
n = 4 
deque - [1,2,3,4]
after one iteration
     deque - [(1,4),(2,3)]
after two iteration 
    deque - [((1,4),(2,3))]

    public String findContestMatch(int n) {
        Deque<String> deque = new ArrayDeque();
       
        for( int i = 1; i <= n; i++ ) deque.add( i+"");
        
        while( deque.size() > 1 )
        {
            Deque<String> temp = new ArrayDeque();
            while( deque.size() > 0  )
                temp.add( "(" + deque.removeFirst() +"," + deque.removeLast() + ")");
      
        deque = temp;
        }
    return deque.getFirst();
    }

