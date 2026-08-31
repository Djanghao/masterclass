# java easy to understand with some object oriented design and helper methods :)

**Author:** aag479
**Votes:** 43
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1198429/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1198429/)

---

What a painful problem! 
Things to realize : 
- "three sequences" do not need to be consecutive timestamps, they are any set of three
visits by the same user in chronological order. I dont think the description makes this clear
-this is a very brute force problem that is going to require a ton of code no matter what( and the 
generation of the 3 sequences is going to be order of n cubed (where n is the list of visits of a particular 
user no matter what (no real way of optimizing)
-the sequence of user visits represented by the 3 parameter arrays are not necessarilly sorted in ascending order of 
time or sorted by user id ( ie all users grouped together).

My Approach : 
First map each user to a list of visits. I define a visit object in order to be able to maintain two pieces of information 
about the visit, site and time. An alternative might be to have a hashmap where the value is another hashmap.
So, iterate through the list of users and check if the map already contains the user id( we have seen this user before) 
and if so create a new visit object with the two properties as the current timestamp element and current site element. 
then add this new visit object to the list for this user. If we havent seen this user before we need to do an initial step 
of instantiating the list and adding this users key. 
-----------
Once we have this map, we have a map of users to a list of their visit objects.  Now, we are annoyingly not 
necessarily given this list in sorted order. So, (since this is an arraylist of objects (and not an array of primitives) we can use Collections.sort() on each list of visits. This is where the comparable interface comes into play. I defined a custom implementation of compareTo() in the visit class to tell the collections framework how to sort a list of visits (based on the timestamp property) An alternative is to pass a custom comparator to the sort method. Either works! 
------------
Now that we have each users list sorted, we need to iterate through each users sorted list and generate all three
sequences. This is done by using a triple nested for loop, running an i pointer from 0 to  length-3 (because the i pointer is the first visit), a j pointer from i + 1 to length -2, and a k pointer from j + 1 to length-1. Instantiating a new string within all three loops allows us to create EVERY POSSIBLE set of three maintaining the ordering. 
------------
We now map each three sequence to a SET of users who have visited it. We use the set because we do not want 
to double count in the case that a user visits the same three sequence more that once!! The number of visits to the 
three sequence by distinct users is just the size of the set! 
-------------
Finally, iterate through the threesequences hashmap key set and keep a maximum threesequence, we need to types 
of comparison based on the fact that if the number of visits is the same we need to sort lexicographically. The way to 
do this is by using the string compareTo instance method which returns an integer value based on the string it is called on and the string that is passed as the parameter. (it will tell you which comes first when they are sorted 
alphabetically, basically) We also need to turn out three sequence into a list of Strings to match the reuturn value of the method!

```
class Solution {
    public List<String> mostVisitedPattern(String[] username, int[] timestamp, String[] website) {
        Map<String, ArrayList<Visit>> map = new HashMap<>();
        for(int i=0; i<username.length; ++i){
            if(!map.containsKey(username[i])){
                map.put(username[i], new ArrayList<Visit>());
            }
            Visit visit = new Visit(website[i],timestamp[i]);
            ArrayList<Visit> tmp = map.get(username[i]);
            tmp.add(visit);
        }
        sort(map);
        Map<String,HashSet<String>> sequences = generateSequences(map);
        List<String> threeSequenceAsArray = pickMaxSequenceAndReformat(sequences);
        return threeSequenceAsArray;        
    }
   private List<String> pickMaxSequenceAndReformat(Map<String,HashSet<String>> sequences){
        String maxSequence = "";
        int max =0;
        for(String sequence : sequences.keySet()){
            int totalUsers = sequences.get(sequence).size();
            if(totalUsers > max ){
                max = totalUsers;
                maxSequence=sequence;
            }
            else if(totalUsers == max){
                if(sequence.compareTo(maxSequence) < 0){
                    maxSequence = sequence;
                }
            }
        }
        List<String> threeSequenceAsArray = new ArrayList<>();
        String [] splitSequence = maxSequence.split(" ");
        for(String s : splitSequence){
            threeSequenceAsArray.add(s);
        }
        return threeSequenceAsArray;                 
   }
   private Map<String,HashSet<String>> generateSequences(Map<String,ArrayList<Visit>> map){
       Map<String, HashSet<String>> sequences = new HashMap<>();
         for(String user : map.keySet()){
             ArrayList<Visit> current = map.get(user);
             for(int i=0; i< current.size()-2; i++){
                 for(int j=i+1;j< current.size()-1; j++){
                     for(int k=j+1 ;k<current.size(); k++){
                         String threeSequence = current.get(i).site +" "+ current.get(j).site +" "+current.get(k).site;
                         if(!sequences.containsKey(threeSequence)){
                             HashSet<String> tmp = new HashSet<>();
                             tmp.add(user);
                             sequences.put(threeSequence,tmp);
                         }
                         else{
                             HashSet<String> tmp = sequences.get(threeSequence);
                             tmp.add(user);
                             sequences.put(threeSequence,tmp);
                         }
                     }
                 }
             }                      
        }
       return sequences;
   }      
    public void sort(Map<String,ArrayList<Visit>> map){
        for(String user : map.keySet()){
            ArrayList<Visit> visits = map.get(user);
            Collections.sort(visits);
        }
    }        
}
class Visit implements Comparable <Visit>{
    String site; 
    int time;
    public Visit(String site, int time){
        this.site=site; 
        this.time=time;
    }
    public int compareTo(Visit v){
        if(v.time==this.time){
            return 0;
        }
        else{
            return this.time > v.time ? 1 : -1;
        }                
    }      
}