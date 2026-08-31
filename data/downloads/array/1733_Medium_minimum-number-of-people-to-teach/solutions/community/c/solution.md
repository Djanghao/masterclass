# Intiution & Explanation with code & comments, beats 100% C++

**Author:** parth2510
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1031632/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1031632/)

---

To find the language to be taught to minimum number of people in real life, we can call the number of people who cant communicate with atleast one of their friend and of all of them can vote what is the most popular language among them, and those who dont know (minority)  will learn it
```
class Solution {
public:
    bool checkinvalid( int a, int b, vector<vector<int>>& languages){ //helper func., checks if a and b can communicate or not
        a--; b--;
        for( int i=0;i<languages[a].size();i++){
            if(find(languages[b].begin(), languages[b].end(), languages[a][i]) != languages[b].end()) return false;
        }
        return true;
    }
    
    int minimumTeachings(int n, vector<vector<int>>& languages, vector<vector<int>>& friendships) {        
        int m= languages.size();
        vector<vector<int>> g(m+1, vector<int>(0)); // graph to store adjacency list with people as nodes & friendships as edges
        // create graph
        for( int i=0;i<friendships.size();i++){
            g[friendships[i][0]].push_back(friendships[i][1]);
            g[friendships[i][1]].push_back(friendships[i][0]);
        }
        
        vector<int> voters(m+1,0); // to store people who cant communicate with atleast a friend
        int voterscount=0; 
        for( int i=1;i<m+1;i++){
             for( int j=0;j<g[i].size();j++){
                if( checkinvalid(i, g[i][j], languages)){ // ith can vote
                    voters[i]=1;
                    voterscount++;
                    break;
                }
            }
        }
        unordered_map<int,int> mappy; //  language -> votes
        int maxvotes=0; 
        
        for( int i=1;i<m+1;i++){
            if(voters[i]==1){ 
                for( int j: languages[i-1]){
                    mappy[j]++;
                    
                    if(maxvotes<mappy[j]){
                        maxvotes= mappy[j];
                    }
                }
            }
        }
        return voterscount - maxvotes; // # who need to be taught the language
    }
};
```
