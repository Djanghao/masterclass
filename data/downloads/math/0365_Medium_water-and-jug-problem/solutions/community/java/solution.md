# VMware asked this in Interview. My BFS solution for interview.

**Author:** asad_abd
**Votes:** 205
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/1055738/](https://leetcode.com/problems/water-and-jug-problem/solutions/1055738/)

---

#  I would advice people to not skip this code variation of the question and directly jump to the mathematical approach. 

# The interviewer wanted me to give the brute force method first, then optimize it and wanted me to explain every step, every condition properly and was ok even without the mathematical variation.
------------------------------------------------------
## The idea is to traverse over the possible capacity **states** of the two jugs (Jug1,Jug2).
## Any jug can be full, semi-full or empty (in any state)
## At any state (a,b) of the jugs we can do 6 things.
1. Pour contents of jug1 to jug2. (note that jug1 may still have some water left after pouring water to jug2)
2. Pour contents of jug2 to jug1. (note that jug2 may still have some water left after pouring water to jug1)
3. Empty jug1 completely.
4. Empty jug2 completely.
5. Fill jug1 completely (to its maximum limit)
6. Fill jug2 completely (to its maximum limit)

We are going to keep a note of the already visited states (a,b) of the jugs in a HashSet of string with key being: "a,b" (the capacities of the jugs separated by a comma. This  helps us to avoid redundant calculations).

We are going to start with a queue containing only the state (0,0) (both jugs empty) initially. Apply the above 6 operations on that and add those states to the queue if they weren't already visited. Then simply keep checking whether in any of the states we get the summation of the capacities == z.

If we don't find any such state. return false.

Also, don't skip questions just because they have a low like to dislike ratio (unless the question or the testcases are wrong) because I've observed that interviewers like asking questions which have a lot of loose ends. So try clearing those doubts from the discussion section of leetcode and then try attempting those questions.
```
	class State{
        int x,y;
        State(int a, int b){
            this.x=a;
            this.y=b;
        }
    } 
    public boolean canMeasureWater(int x, int y, int z) {
        if(x+y==z) return true;
        if(x+y<z) return false;
        if(x%2==0 && y%2==0 && z%2!=0)//cannot measure odd capacity using even capacity jugs 
            return false;
        
        HashSet<String> visited=new HashSet<>();//state visited hset of jugs
        State start=new State(0,0);
        Queue<State> q=new LinkedList<>();
        q.add(start);
        //run a bfs. don't add already visited states
        while(q.size()>0){
            int n=q.size();
            State curr=q.poll();
            if(curr.x+curr.y==z)
                return true;
            visited.add(curr.x+","+curr.y);
            
            int newY,newX;
            //pour x->y ********************* option 1
            newX=curr.x-Math.min(curr.x,y-curr.y);
            newY=curr.y+Math.min(curr.x,y-curr.y);
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
            
            //pour x<-y ********************* option 2
            newX=curr.x+Math.min(curr.y,x-curr.x);
            newY=curr.y-Math.min(curr.y,x-curr.x);
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
            
            //expty x   ********************* option 3
            newX=0;
            newY=curr.y;//same
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
            
            //empty y   ********************* option 4
            newX=curr.x;//same
            newY=0;
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
            
            //fill x    ********************* option 5
            newX=x;//max capacity
            newY=curr.y;
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
            
            //fill y    ********************* option 6
            newX=curr.x;
            newY=y;//max capacity
            if(!visited.contains(newX+","+newY) )
                q.add(new State(newX,newY));
        }
        return false;
    }
```