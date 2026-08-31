# Commented BFS solution. Beats 90%.

**Author:** DayLawn
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/4232808/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/4232808/)

---

# Intuition

After completely not understanding the problem at all due to an interesting description and having to peep at the solutions section to understand, I came up with a BFS solution. Basically you need to jump between the strings in the bank to get to the solution. 

# Approach

Basically you need to jump between the strings in the bank to eventually land on the final mutation. Each jump can only contain one character difference in the string. I used a standard BFS search to find the shortest route to the solution. 

# Code
```
public class Solution {
    public int MinMutation(string startGene, string endGene, string[] bank) {
        
        //if bank is empty, return
        if(bank.Length == 0){
            return -1;
        }
        
        // keep track of what nodes we've seen
        HashSet<string> seen = new HashSet<string>();
        
        // queue of nodes to check
        Queue<geneNode> wordQueue = new Queue<geneNode>();
        
        // add starting gene
        seen.Add(startGene);
        
        // add first node to queue
        wordQueue.Enqueue(new geneNode(startGene,0));
        
        // while queue contains anything, keep searching
        while(wordQueue.Any()){
            
            // get next thing in the queue
            geneNode currGene = wordQueue.Dequeue();
            
            // we found the end gene! yay! return how many steps it took
            if(currGene.currentGene == endGene){
                return currGene.mutations;
            }
            
            //go through each gene in the bank
            foreach(String bankGene in bank){
                
                // we already looked at this gene, move on
                if(seen.Contains(bankGene)){continue;}
                
                // how many letters are different between these two genes
                int letterCount = 0;
                
                // go through each letter and check against the current genes letter
                for(int x = 0; x < bankGene.Length; x++){
                    if(currGene.currentGene[x] != bankGene[x]){
                        letterCount += 1;
                    }
                    //too many letters, end the loop
                    if(letterCount >= 2){
                        break;
                    }
                }
                if(letterCount <= 1){
                    wordQueue.Enqueue(new geneNode(bankGene,currGene.mutations + 1));
                    seen.Add(bankGene);
                }
            }
        }
        return -1;
        
    }
    // class to keep track of current BFS search
    private class geneNode {
        //current string
        public string currentGene;
        //number of mutations it took to get here
        public int mutations;
        
        public geneNode(string currentGene, int mutations){
            this.currentGene = currentGene;
            this.mutations = mutations;
        }
    }
}
```