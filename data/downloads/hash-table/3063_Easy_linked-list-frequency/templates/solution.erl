%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec frequencies_of_elements(Head :: #list_node{} | null) -> #list_node{} | null.
frequencies_of_elements(Head) ->
  .