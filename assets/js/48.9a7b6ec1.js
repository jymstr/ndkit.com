(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{371:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"connecting-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connecting-peers"}},[t._v("#")]),t._v(" Connecting Peers")]),t._v(" "),s("p",[t._v("First things first, let's join the Lightning Network! Connections to other peers\nare established with "),s("code",[t._v("PeerManager")]),t._v(". You'll need to know the pubkey and address\nof another node that you want as a peer. Once the connection is established and\nthe handshake is complete, "),s("code",[t._v("PeerManager")]),t._v(" will show the peer's pubkey in its list\nof peers.")]),t._v(" "),s("CodeSwitcher",{attrs:{languages:{rust:"Rust",java:"Java"}},scopedSlots:t._u([{key:"rust",fn:function(){return[s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("lightning_net_tokio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect_outbound")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("peer_manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pubkey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_closed_future"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" connection_closed_future "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_closed_future"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make sure the connection is still established.")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("futures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("poll!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" connection_closed_future"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Poll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("panic!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR: Peer disconnected before handshake completed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Poll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pending")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait for the handshake to complete.")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" peer_manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_peer_node_ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token closure-params"}},[s("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" pubkey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("None")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("tokio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("None")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("panic!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR: Failed to connect to peer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0},{key:"java",fn:function(){return[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect and wait for the handshake to complete.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketAddress")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tnio_peer_handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pubkey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The peer's pubkey will be present in the list of peer ids.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PeerManager")]),t._v(" peer_manager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" channel_manager_constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("peer_manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" peer_node_ids "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" peer_manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_peer_node_ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("IOException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle failure to successfully connect to a peer.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);s.default=e.exports}}]);