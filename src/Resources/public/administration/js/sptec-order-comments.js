!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/sptecordercomments/",n(n.s="6S7m")}({"6S7m":function(e,t,n){"use strict";n.r(t);var o=n("ak5R"),r=n.n(o);Shopware.Component.override("sw-order-detail",{template:r.a});var d=n("Te8q"),i=n.n(d),a=(n("HKHR"),Shopware),s=a.Component,l=a.Context,m=a.Mixin,c=Shopware.Data.Criteria;s.register("sw-order-detail-comments",{template:i.a,inject:["repositoryFactory"],mixins:[m.getByName("listing")],data:function(){return{identifier:"",currentOrderCommentId:null,showOrderCommentModal:!1,deleteOrderCommentId:null,isLoading:!0,orderComments:[],limit:10,sortBy:"createdAt",sortDirection:"DESC"}},metaInfo:function(){return{title:this.$createTitle(this.identifier,this.$tc("sw-order.detail.tabOrderComments"))}},computed:{orderCommentRepository:function(){return this.repositoryFactory.create("sptec_order_comment")},orderCommentCriteria:function(){var e=this.$route.params.id,t=new c(this.page,this.limit);return t.addAssociation("createdBy").addAssociation("order").addSorting(c.sort(this.sortBy,this.sortDirection)).addFilter(c.equals("orderId",e)),null!==this.term&&t.setTerm(this.term),t}},watch:{isLoading:function(e){this.$emit("loading-change",e)}},methods:{getList:function(){var e=this;this.orderCommentRepository.search(this.orderCommentCriteria).then((function(t){e.total=t.total,e.orderComments=t,e.identifier=t.first().order.orderNumber,e.isLoading=!1})).catch((function(){e.isLoading=!1}))},onChange:function(e){this.term=e,this.orderComments.criteria.setPage(1),this.orderComments.criteria.setTerm(e),this.getList()},openModal:function(){this.showOrderCommentModal=!0},closeModal:function(){this.showOrderCommentModal=!1,this.currentOrderCommentId=null},editComment:function(e){this.currentOrderCommentId=e,this.openModal()},deleteComment:function(e){this.deleteOrderCommentId=e},onConfirmCommentDelete:function(){var e=this;this.orderCommentRepository.delete(this.deleteOrderCommentId,l.api).then((function(){e.onCancelCommentDelete(),e.getList()}))},onCancelCommentDelete:function(){this.deleteOrderCommentId=null}}});var u=n("e/Pn"),p=n.n(u);n("dYdK");Shopware.Component.register("sw-order-comment-modal",{template:p.a,inject:["repositoryFactory"],props:{orderId:{type:String,required:!0},orderCommentId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!0,orderComment:void 0}},computed:{orderCommentRepository:function(){return this.repositoryFactory.create("sptec_order_comment")},primaryActionDisabled:function(){return!this.orderComment||""===this.orderComment.content},currentUser:function(){return Shopware.State.get("session").currentUser},userName:function(){return this.currentUser?"".concat(this.currentUser.firstName," ").concat(this.currentUser.lastName):""}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.orderCommentId?this.getOrderComment():(this.orderComment=this.orderCommentRepository.create(Shopware.Context.api),this.orderComment.createdById=this.currentUser.id,this.orderComment.orderId=this.orderId,this.orderComment.internal=!0,this.isLoading=!1)},closeModal:function(){this.$emit("close-modal")},saveComment:function(){var e=this;this.orderCommentRepository.save(this.orderComment,Shopware.Context.api).then((function(){e.closeModal(),e.$emit("reload-order-comments")}))},getOrderComment:function(){var e=this;this.isLoading=!0,this.orderCommentRepository.get(this.orderCommentId,Shopware.Context.api).then((function(t){e.orderComment=t,e.isLoading=!1}))}}}),Shopware.Module.register("sptec-order-comments",{routeMiddleware:function(e,t){"sw.order.detail"===t.name&&t.children.push({name:"sw.order.detail.comments",path:"/sw/order/detail/:id/comments",component:"sw-order-detail-comments",meta:{parentPath:"sw.order.index",privilege:"order.viewer"}}),e(t)}})},Ep0a:function(e,t,n){},HKHR:function(e,t,n){var o=n("Ep0a");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("49e34ba5",o,!0,{})},SZ7m:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var d=t[r],i=d[0],a={id:e+":"+r,css:d[1],media:d[2],sourceMap:d[3]};o[i]?o[i].parts.push(a):n.push(o[i]={id:i,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return f}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},i=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,l=!1,m=function(){},c=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){l=n,c=r||{};var i=o(e,t);return h(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r];(s=d[a.id]).refs--,n.push(s)}t?h(i=o(e,t)):i=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(C(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(C(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:i}}}}function w(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function C(e){var t,n,o=document.querySelector("style["+u+'~="'+e.id+'"]');if(o){if(l)return m;o.parentNode.removeChild(o)}if(p){var r=s++;o=a||(a=w()),t=_.bind(null,o,r,!1),n=_.bind(null,o,r,!0)}else o=w(),t=v.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var d=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(d,i[t]):e.appendChild(d)}}function v(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),c.ssrId&&e.setAttribute(u,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},Te8q:function(e,t){e.exports='{% block sw_order_detail_comments %}\n    <sw-card\n        class="sw-order-detail-order-comments"\n        :title="$tc(\'sw-order.commentCard.textCommentsTotal\', total, {total: total})"\n        :isLoading="isLoading"\n    >\n        {% block sw_order_detail_comments_toolbar %}\n            <template #toolbar>\n                <sw-card-filter\n                    :placeholder="$tc(\'sw-order.commentCard.searchbarPlaceholder\')"\n                    @sw-card-filter-term-change="onChange"\n                >\n                    <template #filter>\n                        <sw-button\n                            size="small"\n                            @click="openModal"\n                        >\n                            <sw-icon\n                                name="small-default-plus-circle"\n                                small\n                            />\n                            {{ $tc(\'sw-order.commentCard.addCommentBtn\') }}\n                        </sw-button>\n                    </template>\n                </sw-card-filter>\n            </template>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_container %}\n            <sw-container\n                v-for="(item, index) in orderComments"\n                :key="index"\n                slot="grid"\n                columns="350px auto"\n                gap="30px"\n            >\n                {% block sw_order_detail_comments_actions %}\n                    <sw-context-button>\n                        {% block sw_order_detail_comments_actions_edit %}\n                            <sw-context-menu-item\n                                @click="editComment(item.id)"\n                            >\n                                {{ $tc(\'sw-order.commentCard.actionEdit\') }}\n                            </sw-context-menu-item>\n                        {% endblock %}\n\n                        {% block sw_order_detail_comments_actions_delete %}\n                            <sw-context-menu-item\n                                variant="danger"\n                                @click="deleteComment(item.id)"\n                            >\n                                {{ $tc(\'sw-order.commentCard.actionDelete\') }}\n                            </sw-context-menu-item>\n                        {% endblock %}\n                    </sw-context-button>\n                {% endblock %}\n\n                {% block sw_order_detail_comments_info %}\n                    <sw-description-list\n                        grid="120px 1fr"\n                    >\n                        <dt>{{ $tc(\'sw-order.commentCard.labelCreatedAt\') }}</dt>\n                        <dd>\n                            {{ item.createdAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </dd>\n                        <dt>{{ $tc(\'sw-order.commentCard.labelUpdatedAt\') }}</dt>\n                        <dd>\n                            {{ item.updatedAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </dd>\n                        <dt>{{ $tc(\'sw-order.commentCard.labelCreatedBy\') }}</dt>\n                        <dd>\n                            {{ item.createdBy.firstName }} {{ item.createdBy.lastName }}\n                        </dd>\n                        <dt>{{ $tc(\'sw-order.commentCard.labelInternal\') }}</dt>\n                        <dd>\n                            <sw-icon\n                                v-if="item.internal"\n                                name="regular-checkmark-xs"\n                                small\n                                color="#189eff"\n                            />\n                            <sw-icon\n                                v-else\n                                name="regular-times-s"\n                                small\n                                color="#e65100"\n                            />\n                        </dd>\n                    </sw-description-list>\n                {% endblock %}\n                {% block sw_order_detail_comments_content %}\n                    <sw-block-field\n                        class="sw-field--textarea"\n                    >\n                        <template #sw-field-input>\n                        <textarea\n                            :value="item.content"\n                            readonly\n                        />\n                        </template>\n                    </sw-block-field>\n                {% endblock %}\n            </sw-container>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_footer %}\n            <template #footer>\n                <sw-pagination\n                    :page="page"\n                    :limit="limit"\n                    :total="total"\n                    :total-visible="7"\n                    @page-change="onPageChange"\n                />\n            </template>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_modal %}\n            <sw-order-comment-modal\n                v-if="showOrderCommentModal"\n                @close-modal="closeModal"\n                @reload-order-comments="getList"\n                :orderId="$route.params.id"\n                :orderCommentId="currentOrderCommentId"\n            />\n        {% endblock %}\n\n        {% block sw_order_detail_comments_warning_modal %}\n            <sw-confirm-modal\n                v-if="deleteOrderCommentId"\n                type="delete"\n                :text="$tc(\'sw-order.commentCard.deleteWarning\')"\n                @confirm="onConfirmCommentDelete"\n                @close="onCancelCommentDelete"\n                @cancel="onCancelCommentDelete"\n            />\n        {% endblock %}\n    </sw-card>\n{% endblock %}\n'},ak5R:function(e,t){e.exports="{% block sw_order_detail_content_tabs_general %}\n    {% parent %}\n    <sw-tabs-item\n        :route=\"{ name: 'sw.order.detail.comments', params: { id: $route.params.id } }\"\n        :title=\"$tc('sw-order.detail.tabOrderComments')\"\n    >\n        {{ $tc('sw-order.detail.tabOrderComments') }}\n    </sw-tabs-item>\n{% endblock %}\n"},bbw4:function(e,t,n){},dYdK:function(e,t,n){var o=n("bbw4");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("1bd20966",o,!0,{})},"e/Pn":function(e,t){e.exports='{% block sw_order_comment_modal %}\n    <sw-modal\n        class="sw-order-comment-modal"\n        :title="$tc(\'sw-order.commentModal.labelTitle\')"\n        :is-loading="isLoading"\n        @modal-close="closeModal"\n    >\n        {% block sw_order_comment_modal_info %}\n            <sw-container\n                class="sw-order-comment-modal__info-container"\n                columns="1fr 1fr"\n            >\n                <sw-description-list\n                    grid="120px 1fr"\n                >\n                    <dt>{{ $tc(\'sw-order.commentModal.labelCreatedBy\') }}</dt>\n                    <dd>\n                        <sw-skeleton-bar\n                            v-if="isLoading"\n                        />\n                        <template v-else>\n                            {{ userName }}\n                        </template>\n                    </dd>\n                    <dt>{{ $tc(\'sw-order.commentModal.labelInternal\') }}</dt>\n                    <dd>\n                        <sw-skeleton-bar\n                            v-if="isLoading"\n                        />\n                        <sw-switch-field\n                            v-else\n                            v-model="orderComment.internal"\n                            :label="$tc(\'sw-order.commentModal.labelInternal\')"\n                        />\n                    </dd>\n                </sw-description-list>\n\n                <sw-description-list\n                    grid="120px 1fr"\n                >\n                    <dt>{{ $tc(\'sw-order.commentModal.labelCreatedAt\') }}</dt>\n                    <dd>\n                        <sw-skeleton-bar\n                            v-if="isLoading"\n                        />\n                        <template v-else>\n                            {{ orderComment.createdAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </template>\n                    </dd>\n                    <dt>{{ $tc(\'sw-order.commentModal.labelUpdatedAt\') }}</dt>\n                    <dd>\n                        <sw-skeleton-bar\n                            v-if="isLoading"\n                        />\n                        <template v-else>\n                            {{ orderComment.updatedAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </template>\n                    </dd>\n                </sw-description-list>\n            </sw-container>\n        {% endblock %}\n\n        {% block sw_order_comment_modal_content %}\n            <sw-skeleton-bar\n                v-if="isLoading"\n                style="height: 125px"\n            />\n            <sw-textarea-field\n                v-else\n                v-model="orderComment.content"\n                required\n            />\n        {% endblock %}\n\n        {% block sw_order_comment_modal_footer %}\n            <template #modal-footer>\n                {% block sw_order_comment_modal_secondary_action %}\n                    <sw-button\n                        @click="closeModal"\n                    >\n                        {{ $tc(\'sw-order.commentModal.labelClose\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block sw_order_comment_modal_primary_action %}\n                    <sw-button\n                        :disabled="primaryActionDisabled"\n                        variant="primary"\n                        @click="saveComment"\n                    >\n                        {{ $tc(\'sw-order.commentModal.labelSave\') }}\n                    </sw-button>\n                {% endblock %}\n            </template>\n        {% endblock %}\n    </sw-modal>\n{% endblock %}\n'}});