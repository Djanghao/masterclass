# ✅ [Java/ C++/Python] Detailed Explanation, fully commented, Try all combs O(N+M) time

**Author:** ashucrma
**Votes:** 117
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016751/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016751/)

---

**Intution:**
Since we can choose **any** indices from both strings to swap and at the end we just need both to have same number of distinct characters. The only thing that matters is which alphabet ('a','b', 'c',...) we choose from word1 and which alphabet ('a','b', 'c',...) we choose from word2 to swap. Since, only lowercase(26 alphabets) are there. We can try swapping all possible alphabet pairs between the two. 

**Method:**

1. Create two maps to store frequency of characters of the strings.
2. Try swapping all possible pairs of alphabets between word1 and word2.


	How do we try swapping all possible pairs of alphabets between word1 and word2?
		2.1 Create two for loops iterating c1: 'a' to 'z', c2: 'a' to 'z'
		2.2 When char c1 is in word1 and char c2 is in word2
		2.3 Remove c1 and put c2 in word1's map
		2.4 Remove c2 and put c1 in word2's map
		   
3. Now check the sizes of maps. If the maps' sizes are same means both words now have equal distinct characters. So, return true 
4. If map sizes are not same then reset the maps back.

	How do we reset the maps?
		4.1 Remove c2 and put back c1 in word1's map  (opposite of 2.3)
		4.2 Remove c1 and put back c2 in word2's map  (opposite of 2.4)

<br>

Since we have are doing frequent insertion and removal from map. A helper function has been made to make the code simpler and concise. 


```
void insertAndRemove(unordered_map<char,int>&mp, char toInsert, char toRemove){
```
It takes 3 arguments. First is the map (unordered_map, HashMap, dictionary) which stores the char frequency of the word  . Second is the character to insert and Third is the character to remove.

**IMP to Note:**
Whenever a character is removed from word i.e. when we substract map value by 1. In that case, if map value reaches 0 then we have to remove that key too from map
```
mp[c]--;                         // After we have done this
if(mp[c]==0) mp.erase(c);        // Need to do this too
```

<br>

**C++:**

```
class Solution {
public:
    
    void insertAndRemove(unordered_map<char,int>&mp, char toInsert, char toRemove){   // made this helper fxn for easy insert/ removal from map
        mp[toInsert]++;     // increment freq for char to be inserted
        mp[toRemove]--;     // decrement freq for char to be removed
        if(mp[toRemove]==0) mp.erase(toRemove);  // if freq of that char reaches zero, then remove the key from map
    }
	
	// Remember to pass map as address in C++   " & mp "
    
    bool isItPossible(string word1, string word2) {
        unordered_map<char,int> mp1, mp2;
        
        for(char w1: word1) mp1[w1]++;   // store freq of chars in word1 in mp1
        for(char w2: word2) mp2[w2]++;   // store freq of chars in word2 in mp2

        for(char c1='a'; c1<='z'; c1++){
            for(char c2='a'; c2<='z'; c2++){
                if(mp1.count(c1)==0 || mp2.count(c2)==0) continue; // if any of the char is not present then skip
				
                insertAndRemove(mp1, c2, c1); // insert c2 to word1 and remove c1 from word1
                insertAndRemove(mp2, c1, c2); // insert c1 to word2 and remove c2 from word2
                
                if(mp1.size()==mp2.size()) return true;  // if size of both maps are equal then possible return true
				
                // reset back the maps
                insertAndRemove(mp1, c1, c2); // insert c1 back to word1 and remove c2 from word1             
                insertAndRemove(mp2, c2, c1); // insert c2 back to word2 and remove c1 from word2
                
            }
        }
        
        return false;
    }
};
```


**Java:**

```
class Solution {
    
    public void insertAndRemove(Map<Character, Integer> mp, char toInsert, char toRemove){  // made this helper fxn for easy removal from hashmap
        mp.put(toInsert, mp.getOrDefault(toInsert, 0) + 1); // increment freq for char to be inserted
        mp.put(toRemove, mp.getOrDefault(toRemove, 0) - 1); // decrement freq for char to be removed
        if(mp.get(toRemove)==0) mp.remove(toRemove); // if freq of that char reaches zero, then remove the key from hashmap

    }
    
    public boolean isItPossible(String word1, String word2) {
        Map<Character, Integer> mp1 = new HashMap<>();
        Map<Character, Integer> mp2 = new HashMap<>();
        
        for (char w1: word1.toCharArray()) {   // store freq of chars in word1 in mp1
            mp1.put(w1, mp1.getOrDefault(w1, 0) + 1);
        }
        for (char w2: word2.toCharArray()) {   // store freq of chars in word2 in mp2
            mp2.put(w2, mp2.getOrDefault(w2, 0) + 1);
        }

        
        for(char c1='a'; c1<='z'; c1++){
            for(char c2='a'; c2<='z'; c2++){

                if(!mp1.containsKey(c1) || !mp2.containsKey(c2)) continue;  // if any of the char is not present then skip
				
                insertAndRemove(mp1, c2, c1); // insert c2 to word1 and remove c1 from word1
                insertAndRemove(mp2, c1, c2); // insert c1 to word2 and remove c2 from word2
                
                if(mp1.size()==mp2.size()) return true;  // if size of both maps are equal then possible return true
				
                // reset back the maps
                insertAndRemove(mp1, c1, c2); // insert c1 back to word1 and remove c2 from word1              
                insertAndRemove(mp2, c2, c1); // insert c2 back to word2 and remove c1 from word2
            }
        }
        
        return false;
    }
}
```


**Python:**
```
class Solution:
    
    def insertAndRemove(self, mp, toInsert, toRemove): 
        mp[toInsert]+=1
        mp[toRemove]-=1
        
        if(mp[toRemove]==0):
            del mp[toRemove]     # if freq of that char reaches zero, then remove the key from dict
        
        
    def isItPossible(self, word1: str, word2: str) -> bool:
        
        mp1, mp2 = Counter(word1), Counter(word2)  # Get freq of chars using Counter
	
        """
        # If you are not familiar with Counters, you can simply do this:
        mp1=defaultdict(int)
        mp2=defaultdict(int)

        for w1 in word1:
            mp1[w1]+=1;   #store freq of chars in word1 in mp1

        for w2 in word2:
            mp2[w2]+=1;  #store freq of chars in word2 in mp2
        """
		
        for c1 in string.ascii_lowercase:         # this for loop iterates through c1='a' to c1='z'
            for c2 in string.ascii_lowercase:     # this for loop iterates through c2='a' to c2='z'
                
                if c1 not in mp1 or c2 not in mp2:  # if any of the char is not present then skip
                    continue

                self.insertAndRemove(mp1, c2, c1); # insert c2 to word1 and remove c1 from word1
                self.insertAndRemove(mp2, c1, c2); # insert c1 to word2 and remove c2 from word2
                
                if len(mp1)== len(mp2):  # if size of both dicts are equal then possible return true
                    return True
				
                # reset back the maps
                self.insertAndRemove(mp1, c1, c2); # insert c1 back to word1 and remove c2 from word1         
                self.insertAndRemove(mp2, c2, c1); # insert c2 back to word2 and remove c1 from word2                
        return False
```

**Complexity Analysis:**
Time: O(N+M+26\\*26) i.e. O(N+M) : where N is the size of word1 and M is the size of word2 . We iterated both strings once, and a fixed 26\\*26 for loop (This 26*26 is constant, doesn't depend on input variables i.e. string sizes N or M)
Space: O(26) i.e O(1) : Since word1 and word2 consist of only lowercase English letters, so both map can have 26 elements only at max

**Please upvote if you liked it.**