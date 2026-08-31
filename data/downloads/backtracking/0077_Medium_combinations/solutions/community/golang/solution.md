# Python/JS/Go by DFS + backtracking [w/ Hint] 有中文解說影片

**Author:** brianchiang_tw
**Votes:** 25
**Link:** [https://leetcode.com/problems/combinations/solutions/794032/](https://leetcode.com/problems/combinations/solutions/794032/)

---

[\u4E2D\u6587\u8A73\u89E3 \u89E3\u8AAA\u5F71\u7247
Tutorial video in Chinese](https://www.youtube.com/watch?v=ITwWVCfLgug&t=468s )

Hint & recall:

**DFS template** with **backtracking**

```
def dfs( parameter ):

	if stop condtion or base case:
		# base case:
		update result
	    return
	
	else:
		# general cases:
		for all possible next moves:
		
		    select one next move
			dfs( paramter with selected next move )
			undo the selection
	
		return
```

---


---

**Implementation** by DFS + backtracking in Python

```
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        
        result = []
        
        def gen_comb(start, cur_comb):
            
            if k == len(cur_comb):
                # base case, also known as stop condition        
				
                result.append( cur_comb[::] )
                return
            
            else:
                # general case:
                
                # solve in DFS
                for i in range(start, n+1):
                    
                    cur_comb.append( i )
                    
                    gen_comb(i+1, cur_comb)
                    
                    cur_comb.pop()
                
                return
        # ----------------------------------------------
        
        gen_comb( start=1, cur_comb=[] )
        return result
```
---

, or equivalent BFS implementation

```
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:

        result = []

        # Stating making subset from empty set with index 1
        bfs_queue = deque( [ (1, []) ] ) 


        # Launch BFS from empty set to enumerate all valid subsets
        while bfs_queue:

            idx, cur = bfs_queue.popleft()

            if len(cur) == k:
                # Add current subset into result
                result.append( cur )
                continue
       
            # Visit all valid numbers with look-forward strategy
            for elem in range(idx, n+1):

                bfs_queue.append( (elem+1, cur + [ elem ] ) )
            
        return result
```

---

**Implementation** by DFS + backtracking in JS

```
var combine = function(n, k) {
    
    function* comb(start, curComb ){
        
        if(curComb.length == k){
            yield curComb;
            return;
        }
        
        for(let i = start; i <= n ; i++){
            yield* comb(i+1, [...curComb, i] );
        }
        return
    }
    
    
    return [ ...comb(start=1, curComb=[]) ];
};
```

or 

```
var combine = function(n, k) {
    
    result = []
    //-----------------------------------
    var comb = function(start, curComb ){
        
        // Base case:
        if(curComb.length == k){
            result.push( [...curComb] ) ;
            return;
        }
        
        // General cases:
        for(let i = start; i <= n ; i++){
            curComb.push( i );
            comb(i+1, curComb );
            curComb.pop()
        }
        return
    }
    //-----------------------------------
    comb(start=1, curComb=[]);
    return result;
};
```

---

**Implementation** by DFS + backtracking in Go

```
func combine(n int, k int) [][]int {
    
    result := make([][]int, 0)
    
    //-------------------------------------------
    var comb func(start int, curComb []int)
    
    comb = func(start int, curComb []int){
        
        // Base case 
        if len(curComb) == k{
            
            
            // make a copy of current combination
            dst := make([]int, k)
            copy(dst, curComb)
            result = append(result, dst)
            return
        }    
        
        // General cases:
        for i := start ; i <= n ; i++{
            curComb = append(curComb, i)
            comb(i+1, curComb)
            curComb = curComb[:len(curComb)-1]
        }
        return
    }
    //-------------------------------------------
    comb(1, make([]int,0) )
    return result    
}
```

---

**Implementation** by math formula for combination in Python

```
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        
        def comb(n, k):
            
            if n == 0 :
                return [ [] ]
            
            elif n == k:
                return  [ [ i for i in range(1, n+1)] ]
            
            elif k == 1:
                return [ [i] for i in range(1,n+1) ]

            else:
                
                # By math formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
                take_n = [ c + [n] for c in comb( n-1, k-1 ) ]
                not_to_take_n = [ c for c in comb( n-1, k ) ]

                return take_n + not_to_take_n
            
        # --------------------------------------
        
        return comb(n, k)
```

---

