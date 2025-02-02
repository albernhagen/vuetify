declare module 'vuetify/lib' {
  import { Component, DirectiveOptions } from 'vue'
  import { Vuetify } from 'vuetify'
  import { Colors } from 'vuetify/lib/util/colors'

  const Vuetify: Vuetify
  const colors: Colors
  const directives: {
    ClickOutside: DirectiveOptions,
    Ripple: DirectiveOptions,
    Resize: DirectiveOptions,
    Scroll: DirectiveOptions,
    Touch: DirectiveOptions
  }
  const VAlert: Component
  const VApp: Component
  const VAppBar: Component
  const VAppBarNavIcon: Component
  const VAutocomplete: Component
  const VAvatar: Component
  const VBadge: Component
  const VBanner: Component
  const VBottomNav: Component
  const VBottomNavigation: Component
  const VBottomSheet: Component
  const VBottomSheetTransition: Component
  const VBreadcrumbs: Component
  const VBreadcrumbsDivider: Component
  const VBreadcrumbsItem: Component
  const VBtn: Component
  const VBtnToggle: Component
  const VCalendar: Component
  const VCalendarDaily: Component
  const VCalendarMonthly: Component
  const VCalendarWeekly: Component
  const VCard: Component
  const VCardActions: Component
  const VCardMedia: Component
  const VCardText: Component
  const VCardTitle: Component
  const VCarousel: Component
  const VCarouselItem: Component
  const VCarouselReverseTransition: Component
  const VCarouselTransition: Component
  const VCheckbox: Component
  const VChip: Component
  const VChipGroup: Component
  const VColorPicker: Component
  const VColorPickerCanvas: Component
  const VColorPickerPreview: Component
  const VColorPickerSwatches: Component
  const VCombobox: Component
  const VContainer: Component
  const VContent: Component
  const VCounter: Component
  const VData: Component
  const VDataFooter: Component
  const VDataIterator: Component
  const VDataTable: Component
  const VDataTableHeader: Component
  const VDataTableHeaderDesktop: Component
  const VDataTableHeaderMobile: Component
  const VDatePicker: Component
  const VDatePickerDateTable: Component
  const VDatePickerHeader: Component
  const VDatePickerMonthTable: Component
  const VDatePickerTitle: Component
  const VDatePickerYears: Component
  const VDialog: Component
  const VDialogBottomTransition: Component
  const VDialogTransition: Component
  const VDivider: Component
  const VEditDialog: Component
  const VExpandTransition: Component
  const VExpansionPanel: Component
  const VExpansionPanelContent: Component
  const VExpansionPanelHeader: Component
  const VExpansionPanels: Component
  const VFabTransition: Component
  const VFadeTransition: Component
  const VFlex: Component
  const VFooter: Component
  const VForm: Component
  const VHover: Component
  const VIcon: Component
  const VImg: Component
  const VInput: Component
  const VItem: Component
  const VItemGroup: Component
  const VLabel: Component
  const VLayout: Component
  const VList: Component
  const VListGroup: Component
  const VListItem: Component
  const VListItemAction: Component
  const VListItemActionText: Component
  const VListItemAvatar: Component
  const VListItemContent: Component
  const VListItemGroup: Component
  const VListItemIcon: Component
  const VListItemSubtitle: Component
  const VListItemTitle: Component
  const VMenu: Component
  const VMenuTransition: Component
  const VMessages: Component
  const VMobileRow: Component
  const VNavigationDrawer: Component
  const VOverflowBtn: Component
  const VOverlay: Component
  const VPagination: Component
  const VParallax: Component
  const VPicker: Component
  const VProgressCircular: Component
  const VProgressLinear: Component
  const VRadio: Component
  const VRadioGroup: Component
  const VRangeSlider: Component
  const VRating: Component
  const VResponsive: Component
  const VRow: Component
  const VRowGroup: Component
  const VScaleTransition: Component
  const VScrollXReverseTransition: Component
  const VScrollXTransition: Component
  const VScrollYReverseTransition: Component
  const VScrollYTransition: Component
  const VSelect: Component
  const VSheet: Component
  const VSimpleCheckbox: Component
  const VSimpleTable: Component
  const VSlideGroup: Component
  const VSlideItem: Component
  const VSlideXReverseTransition: Component
  const VSlideXTransition: Component
  const VSlideYReverseTransition: Component
  const VSlideYTransition: Component
  const VSlider: Component
  const VSnackbar: Component
  const VSpacer: Component
  const VSpeedDial: Component
  const VStepper: Component
  const VStepperContent: Component
  const VStepperHeader: Component
  const VStepperItems: Component
  const VStepperStep: Component
  const VSubheader: Component
  const VSwitch: Component
  const VSystemBar: Component
  const VTab: Component
  const VTabItem: Component
  const VTabReverseTransition: Component
  const VTabTransition: Component
  const VTableOverflow: Component
  const VTabs: Component
  const VTabsItems: Component
  const VTabsSlider: Component
  const VTextField: Component
  const VTextarea: Component
  const VTimePicker: Component
  const VTimePickerClock: Component
  const VTimePickerTitle: Component
  const VTimeline: Component
  const VTimelineItem: Component
  const VToolbar: Component
  const VToolbarItems: Component
  const VToolbarSideIcon: Component
  const VToolbarTitle: Component
  const VTooltip: Component
  const VTreeview: Component
  const VTreeviewNode: Component
  const VVirtualTable: Component
  const VWindow: Component
  const VWindowItem: Component

  export default Vuetify
  export {
    colors,
    directives,
    VAlert,
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBanner,
    VBottomNav,
    VBottomNavigation,
    VBottomSheet,
    VBottomSheetTransition,
    VBreadcrumbs,
    VBreadcrumbsDivider,
    VBreadcrumbsItem,
    VBtn,
    VBtnToggle,
    VCalendar,
    VCalendarDaily,
    VCalendarMonthly,
    VCalendarWeekly,
    VCard,
    VCardActions,
    VCardMedia,
    VCardText,
    VCardTitle,
    VCarousel,
    VCarouselItem,
    VCarouselReverseTransition,
    VCarouselTransition,
    VCheckbox,
    VChip,
    VChipGroup,
    VColorPicker,
    VColorPickerCanvas,
    VColorPickerPreview,
    VColorPickerSwatches,
    VCombobox,
    VContainer,
    VContent,
    VCounter,
    VData,
    VDataFooter,
    VDataIterator,
    VDataTable,
    VDataTableHeader,
    VDataTableHeaderDesktop,
    VDataTableHeaderMobile,
    VDatePicker,
    VDatePickerDateTable,
    VDatePickerHeader,
    VDatePickerMonthTable,
    VDatePickerTitle,
    VDatePickerYears,
    VDialog,
    VDialogBottomTransition,
    VDialogTransition,
    VDivider,
    VEditDialog,
    VExpandTransition,
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VExpansionPanels,
    VFabTransition,
    VFadeTransition,
    VFlex,
    VFooter,
    VForm,
    VHover,
    VIcon,
    VImg,
    VInput,
    VItem,
    VItemGroup,
    VLabel,
    VLayout,
    VList,
    VListGroup,
    VListItem,
    VListItemAction,
    VListItemActionText,
    VListItemAvatar,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VMenu,
    VMenuTransition,
    VMessages,
    VMobileRow,
    VNavigationDrawer,
    VOverflowBtn,
    VOverlay,
    VPagination,
    VParallax,
    VPicker,
    VProgressCircular,
    VProgressLinear,
    VRadio,
    VRadioGroup,
    VRangeSlider,
    VRating,
    VResponsive,
    VRow,
    VRowGroup,
    VScaleTransition,
    VScrollXReverseTransition,
    VScrollXTransition,
    VScrollYReverseTransition,
    VScrollYTransition,
    VSelect,
    VSheet,
    VSimpleCheckbox,
    VSimpleTable,
    VSlideGroup,
    VSlideItem,
    VSlideXReverseTransition,
    VSlideXTransition,
    VSlideYReverseTransition,
    VSlideYTransition,
    VSlider,
    VSnackbar,
    VSpacer,
    VSpeedDial,
    VStepper,
    VStepperContent,
    VStepperHeader,
    VStepperItems,
    VStepperStep,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTab,
    VTabItem,
    VTabReverseTransition,
    VTabTransition,
    VTableOverflow,
    VTabs,
    VTabsItems,
    VTabsSlider,
    VTextField,
    VTextarea,
    VTimePicker,
    VTimePickerClock,
    VTimePickerTitle,
    VTimeline,
    VTimelineItem,
    VToolbar,
    VToolbarItems,
    VToolbarSideIcon,
    VToolbarTitle,
    VTooltip,
    VTreeview,
    VTreeviewNode,
    VVirtualTable,
    VWindow,
    VWindowItem
  }
}
