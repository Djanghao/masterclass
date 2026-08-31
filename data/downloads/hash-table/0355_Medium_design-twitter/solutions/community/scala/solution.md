# best solution aziz werghi goat

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-twitter/solutions/5786123/](https://leetcode.com/problems/design-twitter/solutions/5786123/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable.Map
class Twitter() {
    var posts :Map[Int,List[Int]] =Map[Int,List[Int]]()
    var followers:Map[Int,List[Int]] =Map[Int,List[Int]]()
    var allposts =List[Int]()
    def postTweet(userId: Int, tweetId: Int): Unit = {
       
        if(posts.contains(userId)){
            posts(userId) = tweetId :: posts(userId)
        }else {
            posts(userId) =List[Int](tweetId)
        }
        allposts = tweetId :: allposts
    }

    def getNewsFeed(userId: Int): List[Int] = {

        var users_he_follow = List[Int]()
        var posts_users_he_follow=List[Int]()
        if (followers.contains(userId)) users_he_follow=followers(userId)
        if (posts.contains(userId)){
            posts_users_he_follow=posts(userId) // 3 5
        }
        if (users_he_follow.length >0){
           for (id <- users_he_follow  ) {

            var post_by_id= List[Int]()
            if (posts.contains(id))  post_by_id=posts(id) // 5
            for (p <- post_by_id ) {
                posts_users_he_follow = p :: posts_users_he_follow // 5 6
            }
            } 
        }
        var x= posts_users_he_follow.distinct
        println(x)
        var new_x =List[Int]()
        for (i <- 0 until allposts.length){
            if (x.contains(allposts(i))){
                new_x = allposts(i) :: new_x
            }
        }
        return new_x.reverse.take(10)
    }

    def follow(followerId: Int, followeeId: Int): Unit = {
        if(followers.contains(followerId)){
            followers(followerId) = followeeId :: followers(followerId)

        }else {
            followers(followerId) =List(followeeId)
        }
        
    }

    def unfollow(followerId: Int, followeeId: Int): Unit = {
        if (followers.contains(followerId)){
            followers(followerId)=followers(followerId).filter(f => f!=followeeId)
        }
    }

}

/**
 * Your Twitter object will be instantiated and called as such:
 * val obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * val param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
```