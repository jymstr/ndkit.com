(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{359:function(e,t,n){"use strict";n.r(t);var i=n(6),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"use-cases-for-ldk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases-for-ldk"}},[e._v("#")]),e._v(" Use Cases for LDK")]),e._v(" "),t("p",[e._v("The standard Lightning use case is running a standalone node on one's laptop.\nHere's some other use cases that LDK supports.")]),e._v(" "),t("h2",{attrs:{id:"mobile-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mobile-devices"}},[e._v("#")]),e._v(" Mobile Devices")]),e._v(" "),t("p",[e._v("Mobile devices with Lightning have unique requirements often not well served by\ntoday's Lightning ecosystem. Not only do they need to operate with minimal\nfootprint, they also have intermittent data access and cannot shutdown safely.\nMore importantly, many existing wallets already have business logic to handle\nblockchain data, keys, and storage, and do not wish to duplicate much of that\nlogic to integrate Lightning (at worst fetching the blockchain twice). LDK\noffers a flexible API to allow users to integrate Lightning with their own keys,\nblockchain data, and storage. To allow full flexibility in footprint, the API\nsupports routing data being fetched via the Lightning P2P protocol, an external\nservice, or routes can be calculated off-device. It also provides cross-platform\ncompatibility for free, allowing synchronization of Lightning state across\ndevices and, as long as there is protection from simultaneous updates, users to\naccess their wallet on any device. See the "),t("a",{attrs:{href:"../../overview/architecture"}},[e._v("Overview")]),e._v(" page for more\ndetails on the interfaces LDK provides for integration.")]),e._v(" "),t("h2",{attrs:{id:"hsms-hardware-security-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hsms-hardware-security-modules"}},[e._v("#")]),e._v(" HSMs (Hardware Security Modules)")]),e._v(" "),t("p",[e._v("LDK Supports various HSM configurations. In conjunction with the "),t("a",{attrs:{href:"https://github.com/lightning-signer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning\nSigner project"),t("OutboundLink")],1),e._v(" , an external HSM can be\nused to verify most protocol details about states before signing, ensuring host\ncompromise cannot steal funds by broadcasting revoked states. For nodes seeking\na higher level of assurance, the entire LDK channel state machine can\nbe run on an offline device, communicating with the outside world via a proxy\nhost which maintains TCP connections with peers. Such a configuration ensures\nall details of the Lightning protocol are enforced without consideration of host\ncompromise.")]),e._v(" "),t("h2",{attrs:{id:"production-lightning-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#production-lightning-nodes"}},[e._v("#")]),e._v(" Production Lightning Nodes")]),e._v(" "),t("p",[e._v("Many large Bitcoin transactors have large amounts of custom-built infrastructure\nfor interacting with the Bitcoin blockchain. Such tight integration with\nbusiness logic may be difficult with existing Lightning implementations focusing\non standalone operation. For such transactors, LDK offers the possibility of\nintegrating a library in their native runtime, storing and handling Lightning\ndata and events in the same way they do blockchain events.")])])}),[],!1,null,null,null);t.default=o.exports}}]);