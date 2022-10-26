!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/sptecordercomments/",n(n.s="6rmr")}({"3zFA":function(e,t,n){},"6Njq":function(e,t,n){},"6rmr":function(e,t,n){"use strict";n.r(t);Shopware.Component.override("sw-boolean-filter",{template:'{% block sw_boolean_filter_content %}\n    <sw-select-field\n        :value="value"\n        :placeholder="filter.placeholder"\n        @change="changeValue"\n    >\n        <option :value="true">\n            {{ filter.optionHasCriteria ? filter.optionHasCriteria : $tc(\'sw-boolean-filter.active\') }}\n        </option>\n        <option :value="false">\n            {{ filter.optionNoCriteria ? filter.optionNoCriteria : $tc(\'sw-boolean-filter.inactive\') }}\n        </option>\n    </sw-select-field>\n{% endblock %}\n'});n("GJ0m"),n("Q+O0");Shopware.Component.register("sptec-media-item",{template:'{% block sptec_media_item %}\n    <div\n        class="sptec-media-item"\n    >\n        {% block sptec_media_item_preview %}\n            <sw-media-preview-v2\n                class="sptec-media-item__image"\n                :source="item.mediaId"\n                :hide-tooltip="hideTooltip"\n                @click="showModal = !showModal"\n            />\n        {% endblock %}\n        {% block sptec_media_item_context_button %}\n            <sw-context-button\n                class="sptec-media-item__context-button"\n            >\n                {% block sptec_media_item_context_action_download %}\n                    <sw-context-menu-item\n                        @click="download"\n                    >\n                        {{ $tc(\'global.sptec-media-item.buttonDownload\') }}\n                    </sw-context-menu-item>\n                {% endblock %}\n                {% block sptec_media_item_context_action_remove %}\n                    <sw-context-menu-item\n                        v-if="showRemove"\n                        variant="danger"\n                        @click="$emit(\'item-remove\')"\n                    >\n                        {{ $tc(\'global.sptec-media-item.buttonRemove\') }}\n                    </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n        {% endblock %}\n        {% block sptec_media_item_modal %}\n            <sw-modal\n                class="sptec-media-item__modal"\n                v-if="showModal"\n                @modal-close="showModal = false"\n                :title="title"\n                variant="large"\n            >\n                {% block sptec_media_item_modal_preview %}\n                    <sw-media-preview-v2\n                        :source="item.mediaId"\n                        hideTooltip\n                        />\n                {% endblock %}\n            </sw-modal>\n        {% endblock %}\n    </div>\n{% endblock %}\n',props:{item:{required:!0,type:Object},showRemove:{type:Boolean,required:!1,default:!1},hideTooltip:{type:Boolean,required:!1,default:!1}},data:function(){return{showModal:!1}},computed:{title:function(){return"".concat(this.item.media.fileName,".").concat(this.item.media.fileExtension)}},methods:{download:function(){var e=document.createElement("a");e.setAttribute("download","".concat(this.item.media.fileName,".").concat(this.item.media.fileExtension)),e.setAttribute("rel","noopener"),e.setAttribute("target","_blank"),e.setAttribute("href",this.item.media.url),e.style.display="hidden",document.body.appendChild(e),e.click(),this.$nextTick((function(){e.parentNode.removeChild(e)}))}}});Shopware.Component.override("sw-order-detail",{template:"{% block sw_order_detail_content_tabs_general %}\n    {% parent %}\n    <sw-tabs-item\n        :route=\"{ name: 'sw.order.detail.comments', params: { id: $route.params.id } }\"\n        :title=\"$tc('sptec-order-comments.tabOrderComments')\"\n    >\n        {{ $tc('sptec-order-comments.tabOrderComments') }}\n    </sw-tabs-item>\n{% endblock %}\n"});n("IPUI"),n("nmUi");var o=Shopware,r=o.Component,i=o.Context,a=o.Mixin,d=Shopware.Data.Criteria;r.register("sptec-order-comments",{template:'{% block sw_order_detail_comments %}\n    <sw-card\n        class="sptec-order-comments"\n        :title="$tc(\'sptec-order-comments.textCommentsTotal\', total, {total: total})"\n        :isLoading="isLoading"\n    >\n        {% block sw_order_detail_comments_toolbar %}\n            <template #toolbar>\n                <sw-card-filter\n                    :placeholder="$tc(\'sptec-order-comments.searchbarPlaceholder\')"\n                    @sw-card-filter-term-change="onChange"\n                >\n                    <template #filter>\n                        <sw-button\n                            size="small"\n                            @click="openModal"\n                        >\n                            <sw-icon\n                                name="small-default-plus-circle"\n                                small\n                            />\n                            {{ $tc(\'sptec-order-comments.addCommentBtn\') }}\n                        </sw-button>\n                    </template>\n                </sw-card-filter>\n            </template>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_item %}\n            <template v-if="total">\n                <sptec-order-comments-item\n                    v-for="item in orderComments"\n                    :key="item.id"\n                    :item="item"\n                    @edit="editComment"\n                    @delete="deleteComment"\n                />\n            </template>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_footer %}\n            <template #footer>\n                <sw-pagination\n                    :page="page"\n                    :limit="limit"\n                    :total="total"\n                    :total-visible="7"\n                    @page-change="onPageChange"\n                />\n            </template>\n        {% endblock %}\n\n        {% block sw_order_detail_comments_modal %}\n            <sptec-order-comments-modal\n                v-if="showOrderCommentModal"\n                @close-modal="closeModal"\n                @reload-order-comments="getList"\n                :orderId="$route.params.id"\n                :orderCommentId="currentOrderCommentId"\n            />\n        {% endblock %}\n\n        {% block sw_order_detail_comments_warning_modal %}\n            <sw-confirm-modal\n                v-if="deleteOrderCommentId"\n                type="delete"\n                :text="$tc(\'sptec-order-comments.item.deleteWarning\')"\n                @confirm="onConfirmCommentDelete"\n                @close="onCancelCommentDelete"\n                @cancel="onCancelCommentDelete"\n            />\n        {% endblock %}\n    </sw-card>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[a.getByName("listing")],data:function(){return{identifier:"",currentOrderCommentId:null,showOrderCommentModal:!1,deleteOrderCommentId:null,isLoading:!0,orderComments:[],total:0,limit:10,sortBy:"createdAt",sortDirection:"DESC"}},metaInfo:function(){return{title:this.$createTitle(this.identifier,this.$tc("sptec-order-comments.tabOrderComments"))}},computed:{orderCommentRepository:function(){return this.repositoryFactory.create("sptec_order_comment")},orderCommentCriteria:function(){var e=this.$route.params.id,t=new d(this.page,this.limit);return t.addAssociation("createdBy").addAssociation("order").addAssociation("media").addSorting(d.sort(this.sortBy,this.sortDirection)).addFilter(d.equals("orderId",e)),null!==this.term&&t.setTerm(this.term),t}},watch:{isLoading:function(e){this.$emit("loading-change",e)}},methods:{getList:function(){var e=this;this.orderCommentRepository.search(this.orderCommentCriteria).then((function(t){e.total=t.total,e.orderComments=t,e.identifier=t.first().order.orderNumber,e.isLoading=!1})).catch((function(){e.isLoading=!1}))},onChange:function(e){this.term=e,this.orderComments.criteria.setPage(1),this.orderComments.criteria.setTerm(e),this.getList()},openModal:function(){this.showOrderCommentModal=!0},closeModal:function(){this.showOrderCommentModal=!1,this.currentOrderCommentId=null},editComment:function(e){this.currentOrderCommentId=e,this.openModal()},deleteComment:function(e){this.deleteOrderCommentId=e},onConfirmCommentDelete:function(){var e=this;this.orderCommentRepository.delete(this.deleteOrderCommentId,i.api).then((function(){e.onCancelCommentDelete(),e.getList()}))},onCancelCommentDelete:function(){this.deleteOrderCommentId=null}}});n("ikW0");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=Shopware,p=l.Component,u=l.Context,f=l.Utils,h=p.getComponentHelper().mapPropertyErrors,b=Shopware.Data.Criteria,_=f.types.isEmpty;p.register("sptec-order-comments-modal",{template:'{% block sptec_order_comments_modal %}\n    <sw-modal\n        class="sptec-order-comments-modal"\n        :title="$tc(\'sptec-order-comments.modal.labelTitle\')"\n        :is-loading="isLoading"\n        @modal-close="closeModal"\n    >\n        {% block sptec_order_comments_modal_tabs %}\n            <sw-tabs default-item="general">\n                <template #default="{ active }">\n                    {% block sptec_order_comments_modal_tab_general %}\n                        <sw-tabs-item\n                            :active-tab="active"\n                            name="general"\n                        >\n                            {{ $tc(\'sptec-order-comments.modal.tabGeneral\') }}\n                        </sw-tabs-item>\n                    {% endblock %}\n                    {% block sptec_order_comments_modal_tab_media %}\n                        <sw-tabs-item\n                            :active-tab="active"\n                            name="media"\n                        >\n                            {{ $tc(\'sptec-order-comments.modal.tabMedia\') }}\n                        </sw-tabs-item>\n                    {% endblock %}\n                </template>\n\n                <template #content="{ active }">\n                    {% block sptec_order_comments_modal_tab_general_content %}\n                        <template v-if="active === \'general\'">\n                            {% block sptec_order_comments_modal_info %}\n                                <sw-container\n                                    class="sptec-order-comments-modal__info-container"\n                                    columns="1fr 1fr"\n                                >\n                                    <sw-description-list\n                                        grid="120px 1fr"\n                                    >\n                                        <dt>{{ $tc(\'sptec-order-comments.modal.labelCreatedBy\') }}</dt>\n                                        <dd>\n                                            <sw-skeleton-bar\n                                                v-if="isLoading"\n                                            />\n                                            <template v-else>\n                                                {{ userName }}\n                                            </template>\n                                        </dd>\n                                        <dt>{{ $tc(\'sptec-order-comments.modal.labelInternal\') }}</dt>\n                                        <dd>\n                                            <sw-skeleton-bar\n                                                v-if="isLoading"\n                                            />\n                                            <sw-switch-field\n                                                v-else\n                                                v-model="orderComment.internal"\n                                                :label="$tc(\'sptec-order-comments.modal.labelInternal\')"\n                                            />\n                                        </dd>\n                                        <dt>{{ $tc(\'sptec-order-comments.modal.labelTask\') }}</dt>\n                                        <dd>\n                                            <sw-skeleton-bar\n                                                v-if="isLoading"\n                                            />\n                                            <sw-single-select\n                                                v-else\n                                                v-model="orderComment.task"\n                                                :class="taskOptionClass"\n                                                :options="taskOptions"\n                                                disableSearchFunction\n                                                size="small"\n                                            />\n                                        </dd>\n                                    </sw-description-list>\n\n                                    <sw-description-list\n                                        grid="120px 1fr"\n                                    >\n                                        <dt>{{ $tc(\'sptec-order-comments.modal.labelCreatedAt\') }}</dt>\n                                        <dd>\n                                            <sw-skeleton-bar\n                                                v-if="isLoading"\n                                            />\n                                            <template v-else>\n                                                {{ orderComment.createdAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                                            </template>\n                                        </dd>\n                                        <dt>{{ $tc(\'sptec-order-comments.modal.labelUpdatedAt\') }}</dt>\n                                        <dd>\n                                            <sw-skeleton-bar\n                                                v-if="isLoading"\n                                            />\n                                            <template v-else>\n                                                {{ orderComment.updatedAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                                            </template>\n                                        </dd>\n                                    </sw-description-list>\n                                </sw-container>\n                            {% endblock %}\n\n                            {% block sptec_order_comments_modal_content %}\n                                <sw-skeleton-bar\n                                    v-if="isLoading"\n                                    style="height: 125px"\n                                />\n                                <sw-textarea-field\n                                    v-else\n                                    v-model="orderComment.content"\n                                    required\n                                    :error="orderCommentContentError"\n                                />\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n                    {% block sptec_order_comments_modal_tab_media_content %}\n                        <template v-if="active === \'media\'">\n                            {% block sptec_order_comments_modal_media_selection %}\n                                <sw-upload-listener\n                                    v-if="!isLoading"\n                                    :upload-tag="orderComment.id"\n                                    auto-upload\n                                    @media-upload-finish="onImageUpload"\n                                    @media-upload-fail="onUploadFailed"\n                                />\n\n                                <sw-media-upload-v2\n                                    v-if="!isLoading"\n                                    :upload-tag="orderComment.id"\n                                    variant="regular"\n                                    fileAccept="*/*"\n                                    :default-folder="orderComment.getEntityName()"\n                                    @media-upload-sidebar-open="onOpenMediaModal"\n                                />\n\n                                <div\n                                    v-if="!isLoading"\n                                    class="sptec-order-comments-item__grid"\n                                    style="grid-template-columns: repeat(6, 1fr);"\n                                >\n                                    <sptec-media-item\n                                        v-for="(mediaItem, index) in orderComment.media"\n                                        :key="index"\n                                        :item="mediaItem"\n                                        showRemove\n                                        @item-remove="onItemRemove(mediaItem)"\n                                    />\n                                </div>\n                            {% endblock %}\n\n                            {% block sptec_order_comments_modal_media_modal %}\n                                <sw-media-modal-v2\n                                    v-if="mediaModalIsOpen"\n                                    variant="regular"\n                                    :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n                                    entity-context="orderComment.getEntityName()"\n                                    @media-upload-remove-image="onItemRemove"\n                                    @media-modal-selection-change="onMediaSelectionChange"\n                                    @modal-close="onCloseMediaModal"\n                                />\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n                </template>\n            </sw-tabs>\n        {% endblock %}\n\n        {% block sptec_order_comments_modal_footer %}\n            <template #modal-footer>\n                {% block sptec_order_comments_modal_secondary_action %}\n                    <sw-button\n                        @click="closeModal"\n                    >\n                        {{ $tc(\'sptec-order-comments.modal.labelClose\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block sptec_order_comments_modal_primary_action %}\n                    <sw-button\n                        :disabled="primaryActionDisabled"\n                        variant="primary"\n                        @click="saveComment"\n                    >\n                        {{ $tc(\'sptec-order-comments.modal.labelSave\') }}\n                    </sw-button>\n                {% endblock %}\n            </template>\n        {% endblock %}\n    </sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{orderId:{type:String,required:!0},orderCommentId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!0,orderComment:void 0,mediaModalIsOpen:!1,taskOptions:[{value:null,label:this.$tc("sptec-order-comments.modal.taskNull")},{value:!0,label:this.$tc("sptec-order-comments.modal.taskTrue")},{value:!1,label:this.$tc("sptec-order-comments.modal.taskFalse")}]}},computed:m(m({},h("orderComment",["content"])),{},{orderCommentRepository:function(){return this.repositoryFactory.create("sptec_order_comment")},primaryActionDisabled:function(){return!this.orderComment||!this.orderComment.content||""===this.orderComment.content},currentUser:function(){return Shopware.State.get("session").currentUser},userName:function(){return this.orderComment.createdBy?"".concat(this.orderComment.createdBy.firstName," ").concat(this.orderComment.createdBy.lastName):this.currentUser?"".concat(this.currentUser.firstName," ").concat(this.currentUser.lastName):""},orderCommentMediaRepository:function(){return this.repositoryFactory.create("sptec_order_comment_media")},orderCommentCriteria:function(){var e=new b(1,100);return e.addAssociation("createdBy").addAssociation("media"),e},taskOptionClass:function(){return!0===this.orderComment.task?"orange":!1===this.orderComment.task?"green":"gray"}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.orderCommentId?this.getOrderComment():(this.orderComment=this.orderCommentRepository.create(Shopware.Context.api),this.orderComment.createdById=this.currentUser.id,this.orderComment.orderId=this.orderId,this.orderComment.internal=!0,this.orderComment.task=null,this.isLoading=!1)},closeModal:function(){this.$emit("close-modal")},saveComment:function(){var e=this;this.orderCommentRepository.save(this.orderComment,Shopware.Context.api).then((function(){e.closeModal(),e.$emit("reload-order-comments")}))},getOrderComment:function(){var e=this;this.isLoading=!0,this.orderCommentRepository.get(this.orderCommentId,Shopware.Context.api,this.orderCommentCriteria).then((function(t){e.orderComment=t,e.isLoading=!1}))},createMediaAssociation:function(e){var t=this.orderCommentMediaRepository.create(u.api);return t.mediaId=e,t},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},onCloseMediaModal:function(){this.mediaModalIsOpen=!1},onImageUpload:function(e){var t=e.targetId;if(!this.orderComment.media.find((function(e){return e.mediaId===t}))){var n=this.createMediaAssociation(t);this.orderComment.media.add(n)}},onItemRemove:function(e){this.orderComment.media.remove(e.id)},onUploadFailed:function(e){var t=e.targetId,n=this.orderComment.media.find((function(e){return e.mediaId===t}));n&&this.orderComment.media.remove(n.id)},onMediaSelectionChange:function(e){var t=this;_(e)||e.forEach((function(e){if(!t.isExistingMedia(e)){var n=t.createMediaAssociation(e.id);t.orderComment.media.add(n)}}))},isExistingMedia:function(e){return this.orderComment.media.some((function(t){var n=t.id,o=t.mediaId;return n===e.id||o===e.id}))}}});n("k7QM");Shopware.Component.register("sptec-order-comments-item",{template:'{% block sptec_order_comments_item %}\n    <div class="sptec-order-comments-item">\n        {% block sptec_order_comments_item_container %}\n            <sw-container\n                slot="grid"\n                columns="350px auto"\n                gap="30px"\n            >\n                {% block sptec_order_comments_item_info %}\n                    <sw-description-list\n                        grid="120px 1fr"\n                    >\n                        <dt>{{ $tc(\'sptec-order-comments.item.labelCreatedAt\') }}</dt>\n                        <dd>\n                            {{ item.createdAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </dd>\n                        <dt>{{ $tc(\'sptec-order-comments.item.labelUpdatedAt\') }}</dt>\n                        <dd>\n                            {{ item.updatedAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                        </dd>\n                        <dt>{{ $tc(\'sptec-order-comments.item.labelCreatedBy\') }}</dt>\n                        <dd>\n                            {{ item.createdBy.firstName }} {{ item.createdBy.lastName }}\n                        </dd>\n                        <dt>{{ $tc(\'sptec-order-comments.item.labelInternal\') }}</dt>\n                        <dd>\n                            <sw-icon\n                                v-if="item.internal"\n                                name="regular-checkmark-xs"\n                                small\n                                color="#189eff"\n                            />\n                            <sw-icon\n                                v-else\n                                name="regular-times-s"\n                                small\n                                color="#e65100"\n                            />\n                        </dd>\n                        <dt>{{ $tc(\'sptec-order-comments.item.labelTask\') }}</dt>\n                        <dd>\n                            <template\n                                v-if="item.task === true"\n                            >\n                                <sw-color-badge\n                                    color="#ffab22"\n                                    rounded\n                                />\n                                {{ $tc(\'sptec-order-comments.modal.taskTrue\') }}\n                            </template>\n                            <template\n                                v-else-if="item.task === false"\n                            >\n                                <sw-color-badge\n                                    color="#37d046"\n                                    rounded\n                                />\n                                {{ $tc(\'sptec-order-comments.modal.taskFalse\') }}\n                            </template>\n                            <template\n                                v-else\n                            >\n                                <sw-color-badge\n                                    color="#94a6b8"\n                                    rounded\n                                />\n                                {{ $tc(\'sptec-order-comments.modal.taskNull\') }}\n                            </template>\n                        </dd>\n                    </sw-description-list>\n                {% endblock %}\n                {% block sptec_order_comments_item_content %}\n                    <div\n                        class="sptec-order-comments-item__content"\n                    >\n                        {% block sptec_order_comments_item_actions %}\n                            <sw-context-button>\n                                {% block sptec_order_comments_item_actions_edit %}\n                                    <sw-context-menu-item\n                                        @click="$emit(\'edit\', item.id)"\n                                    >\n                                        {{ $tc(\'sptec-order-comments.item.actionEdit\') }}\n                                    </sw-context-menu-item>\n                                {% endblock %}\n\n                                {% block sptec_order_comments_item_actions_delete %}\n                                    <sw-context-menu-item\n                                        variant="danger"\n                                        @click="$emit(\'delete\', item.id)"\n                                    >\n                                        {{ $tc(\'sptec-order-comments.item.actionDelete\') }}\n                                    </sw-context-menu-item>\n                                {% endblock %}\n                            </sw-context-button>\n                        {% endblock %}\n                        <sw-block-field\n                            class="sw-field--textarea"\n                        >\n                            <template #sw-field-input>\n                                        <textarea\n                                            :value="item.content"\n                                            readonly\n                                        />\n                            </template>\n                        </sw-block-field>\n                    </div>\n                {% endblock %}\n            </sw-container>\n        {% endblock %}\n        {% block sptec_order_comments_item_grid %}\n            <div\n                v-if="item.media.length > 0"\n                class="sptec-order-comments-item__grid"\n            >\n                <sptec-media-item\n                    v-for="(mediaItem, index) in item.media"\n                    :key="index"\n                    :item="mediaItem"\n                    @click="openMediaModal(mediaItem)"\n                />\n            </div>\n        {% endblock %}\n    </div>\n{% endblock %}\n',props:{item:{type:Object,required:!0}}}),Shopware.Module.register("sptec-order-comments",{color:"#763b8f",icon:"regular-shopping-bag",entity:"sptec_order_comment",routeMiddleware:function(e,t){"sw.order.detail"===t.name&&t.children.push({name:"sw.order.detail.comments",path:"/sw/order/detail/:id/comments",component:"sptec-order-comments",meta:{parentPath:"sw.order.index",privilege:"order.viewer"}}),e(t)}})},GJ0m:function(e,t){Shopware.Component.override("sw-media-folder-item",{computed:{iconName:function(){var e=this.$super("iconName");return"regular-shopping-bag"===this.iconConfig.name&&"#763b8f"===this.iconConfig.color&&(e="multicolor-folder-thumbnail--purple"),e}}})},IPUI:function(e,t){Shopware.Component.override("sw-order-list",{computed:{orderCriteria:function(){var e=this.$super("orderCriteria");return e.addAssociation("sptecOrderComments"),e},listFilterOptions:function(){var e=this.$super("listFilterOptions");return e["comment-filter"]={property:"sptecOrderComments",label:this.$tc("sptec-order-comments.filter.commentFilterLabel"),placeholder:this.$tc("sptec-order-comments.filter.commentFilterPlaceholder"),optionHasCriteria:this.$tc("sptec-order-comments.filter.orderHasComment"),optionNoCriteria:this.$tc("sptec-order-comments.filter.orderNoComment")},e["task-filter"]={property:"sptecOrderComments.task",label:this.$tc("sptec-order-comments.filter.taskFilterLabel"),placeholder:this.$tc("sptec-order-comments.filter.taskFilterPlaceholder"),optionHasCriteria:this.$tc("sptec-order-comments.filter.commentHasTask"),optionNoCriteria:this.$tc("sptec-order-comments.filter.commentTaskDone")},e}},methods:{createdComponent:function(){this.defaultFilters.push("comment-filter","task-filter"),this.$super("createdComponent")}}})},N9Jn:function(e,t,n){},"Q+O0":function(e,t,n){var o=n("3zFA");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("111a70c4",o,!0,{})},SZ7m:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],d={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}n.r(t),n.d(t,"default",(function(){return f}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),d=null,s=0,m=!1,c=function(){},l=null,p="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){m=n,l=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var d=a[r];(s=i[d.id]).refs--,n.push(s)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var m=0;m<s.parts.length;m++)s.parts[m]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(_(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(_(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function _(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(m)return c;o.parentNode.removeChild(o)}if(u){var r=s++;o=d||(d=b()),t=C.bind(null,o,r,!1),n=C.bind(null,o,r,!0)}else o=b(),t=w.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function C(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function w(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),l.ssrId&&e.setAttribute(p,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},ikW0:function(e,t,n){var o=n("N9Jn");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("0578417e",o,!0,{})},k7QM:function(e,t,n){var o=n("6Njq");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("32cc2e56",o,!0,{})},mF9k:function(e,t,n){},nmUi:function(e,t,n){var o=n("mF9k");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("db49ba8e",o,!0,{})}});