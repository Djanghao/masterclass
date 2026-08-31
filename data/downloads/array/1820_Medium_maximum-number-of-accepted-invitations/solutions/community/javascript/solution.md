# fully explained javascript dfs solution

**Author:** djgundrum
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1666141/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1666141/)

---

```
/**
 * @param {number[][]} grid
 * @return {number}
 
 * For this solution we use dfs to check all the possibilities for the invitations
 
 * First thing to do is create a variable that will map which boys have invited which girls. This is done 
 * by mapping a boys index at each girls index in an array. 
 
 * Then we iterate through all of the boys. For each boy we check a few things.
 * a. If the boy is allowed to ask a particular girl
 * b. If this boy has already asked her (part of dfs, to stop infinite loops)
 
 * If this boy is not allowed to invite a particular girl, then we continue on to the next girl.
 
 * If this boy is allowed to invite a particular girl, AND she hasn't been invited by anyone else, we 
 * mark that boy as the person that invited her and continue on to the next boy.
 
 * If this boy is allowed to invite a particular girl, but she has already been invited by another boy, we 
 * recurse into that boy and see if he can invite some other girl. If the other boy can invite a different 
 * girl, both boys are updated and the algorithm continues on to the next boy. If the other boy cannot invite 
 * a different girl, the first boy keeps the invitation and we continue to search for the current boy.
 
 * Each time the dfs returns positively, we can increment our tally because we are guarenteed another girl
 * able to be invited.
 */
var maximumInvitations = function(grid) {
    
    // this is the amount of boys and girls that there are total
    const boys = grid.length;
    const girls = grid[0].length;
    
    // array that tracks index of which boy invited which girl
    const matched = new Array(girls).fill(-1);
    
    // @param boy: which boy we are currently calculating 
    // @param is_asked: boolean array tracking if current boy has already asked a girl (stopping infinite loops)
    const dfs = (boy, is_asked) => {
        
        // iterate through all the girls
        for (let girl = 0; girl < girls; ++girl) {
            
            // if boy can't invite this girl, or she's already been asked, continue
            if (grid[boy][girl] === 0 || is_asked[girl]) continue;
            
            // if the girl hasn't been invited by anyone other boy yet
            if (matched[girl] === -1) {
                matched[girl] = boy;
                return true;
            }
            
            
            // mark that this boy has already had ability to ask this girl
            is_asked[girl] = true;
            
            // check to see if other boy can switch to another girl
            const can_switch = dfs(matched[girl], is_asked);
            
            // return if he can
            if (can_switch) {
                matched[girl] = boy;
                return true;
            }
        }
    }
    
    // this is the total count of invitations that can be accepted
    let result = 0;
    
    // iterate through all the boys 
    for (let boy = 0; boy < boys; ++boy) {
        
        // check if boy can invite girl
        const can_invite = dfs(boy, new Array(girls).fill(false))
        
        if (can_invite) ++result;
    }
    
    return result;
};
```