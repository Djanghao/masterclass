# Twitter/X Design

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-twitter/solutions/4089659/](https://leetcode.com/problems/design-twitter/solutions/4089659/)

---


# Code
```
class Twitter
    def initialize()
        @tweet_timestamp = 1
        @tweets = {}
        @feed = {}
        @following = {}
    end


=begin
    :type user_id: Integer
    :type tweet_id: Integer
    :rtype: Void
=end

    # List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.

    def post_tweet(user_id, tweet_id)
        if @tweets[user_id]
            @tweets[user_id].unshift([tweet_id, @tweet_timestamp])
        else
            @tweets[user_id] = [[tweet_id, @tweet_timestamp]]
        end

        @tweet_timestamp = @tweet_timestamp + 1
    end


=begin
    :type user_id: Integer
    :rtype: Integer[]
=end
    def get_news_feed(user_id)
        tweets = []
        if @tweets[user_id]
            tweets.concat @tweets[user_id]
        end
        if @following[user_id]
            @following[user_id].keys.each do |following_id|
                if @tweets[following_id]
                    tweets.concat @tweets[following_id]
                end
            end
        end

        tweets = tweets.sort{|a,b| b[1]<=>a[1]}[0..9].collect{|a| a[0]}
    end
    


=begin
    :type follower_id: Integer
    :type followee_id: Integer
    :rtype: Void
=end
    def follow(follower_id, followee_id)
        if !@following[follower_id]
            @following[follower_id] = {}
        end

        @following[follower_id][followee_id] = true
    end


=begin
    :type follower_id: Integer
    :type followee_id: Integer
    :rtype: Void
=end
    def unfollow(follower_id, followee_id)
        if !@following[follower_id]
            @following[follower_id] = {}
        end

        if @following[follower_id][followee_id]
            @following[follower_id].delete followee_id
        end
    end
end

# Your Twitter object will be instantiated and called as such:
# obj = Twitter.new()
# obj.post_tweet(user_id, tweet_id)
# param_2 = obj.get_news_feed(user_id)
# obj.follow(follower_id, followee_id)
# obj.unfollow(follower_id, followee_id)
```