import { StyleSheet } from "react-native";

export default globle_style = StyleSheet.create({


  gbl_btn: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 57,
    backgroundColor: '#40BFFF',
    textAlign: 'center',
    borderRadious: 5,
    color: '#fff',
    borderRadius: 8
  },

  gbl_input: {
    lineHeight: 22,
    paddingLeft: 10,
    borderColor: '#EBF0FF',
    color: '#9098B1',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    width: '100%',

  },

  gbl_act_input: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#9098B1',
    // fontSize:14

  },
  frm_con_active: {
    borderColor: '#40BFFF'
  },

  logos_hd: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#223263',
    lineHeight: 24,
    marginBottom: 8
  },
  logos_para: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#9098B1',
    lineHeight: 22,
  },



  // SplashScreen start here 

  Splash_sec: {
    flex: 1,
    backgroundColor: "#40BFFF",
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Login screen start here 

  login_sec: {
    paddingTop: 50,
  },
  login_con: {
  },
  logos_itm: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28
  },
  frm_sec: {
    paddingHorizontal: 16
  },
  frm_con: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },

  globle_btn: {
    marginBottom: 31
  },
  other_or: {
    borderBottomWidth: 1,
    borderColor: '#EBF0FF',
    position: 'relative',
    marginBottom: 16
  },
  or_txt: {
    textAlign: 'center',
    position: 'absolute',
    left: 145,
    top: -15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700'
  },
  social_sec: {
    marginBottom: 16
  },
  social_con: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EBF0FF',
    marginBottom: 10,
  },
  social_txt: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#9098B1',
    lineHeight: 57,
    paddingLeft: 70
  },
  forgt_regis_sec: {
    marginBottom: 79
  },
  forget: {
    color: '#40BFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  regis: {
    color: '#9098B1',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  regis_txt: {
    color: '#40BFFF',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },



  // ====================Home  screen page /===============

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  home_sec: {
    // paddingHorizontal:16
    borderBottomWidth: 1,
    marginBottom: 16,
    borderColor: '#EBF0FF'
  },

  srch_itm: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    color: '#EBF0FF',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    flexBasis: 100,
    flexShrink: 0,
    flexGrow: 1
  },
  srch_icn: {
    marginLeft: 16,
    marginRight: 8
  },
  srch_txt: {
    fontSize: 12,
    color: '9098B1',
    fontWeight: '400',
    lineHeight: 22,
    color: '#9098B1',
    fontFamily: 'Poppins-Regular',
    Width: '100%',
    flexBasis: 100,
    flexShrink: 0,
    flexGrow: 1
  },
  home_srch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#EBF0FF',
    paddingBottom: 16
  },
  lik_notif: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  notify: {
    marginLeft: 19,
    position: 'relative'
  },
  red_alert: {
    position: 'absolute',
    right: 0
  },
  banner_sec: {
    paddingHorizontal: 10,
    marginBottom: 24
  },

  catg_sec: {
    marginBottom: 24
  },
  catg_hd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12
  },
  catg_hd_txt: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#223263',
    lineHeight: 21
  },
  catghd_rgt_txt: {
    color: '#40BFFF',
  },
  catg_con: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 16,
  },
  catg_itm: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 45,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 12
  },
  catg_lst: {
    alignItems: 'center',
  },
  catg_itm_txt: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#9098B1',
    textAlign: 'center'
  },
  flash_sal: {
    paddingHorizontal: 16
  },
  flash_sal_lst: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  flash_sal_itm: {
    borderColor: '#EBF0FF',
    marginRight: 10,
    flexBasis: 141,
    flexGrow: 1,
    flexShrink: 0,
  },
  flas_img: {
    paddingHorizontal: 16,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: '#DADADA',
    height: 108,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flash_sal_itm_txt: {
    paddingHorizontal: 6,
    borderWidth: 1,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderColor: '#EBF0FF',
    paddingBottom: 16
  },
  flash_name: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    lineHeight: 18,
    color: '#223263',
  },
  flash_rate: {
    color: '#09A903'
  },
  flash_off_rate_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  flash_offrate: {
    color: '#9098B1',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'line-through',
    fontSize: 10,
    marginRight: 6
  },
  flash_off: {
    color: '#FB7181',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 10
  },
  recom_prod: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  recom_prod_con: {
    position: 'absolute',
    left: 40,
    top: 48
  },
  recom_prod_txt: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 16,
    maxWidth: 169,
    lineHeight: 32
  },
  recom_prod_para: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#fff'
  },
  view_itm_lst: {
    flexWrap: 'wrap',
    paddingHorizontal: 0,

  },
  view_itm_itm: {
    marginBottom: 12,
  },


  // ========================flash screen===============
  header_con: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 28,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: "#EBF0FF"
  },
  header_itm_lft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_txt: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
    color: '#223263'
  },
  header_back_btn: {
    marginRight: 12
  },
  flash_sec: {
    paddingTop: 16,
    marginBottom: 17
  },
  rating_img: {
    marginTop: 4,
    marginBottom: 16
  },

  // / ========================favorite product screen===============


  fav_prodt: {
    paddingTop: 16,
    marginBottom: 17
  },
  fav_rate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 8
  },



  // ======================= product detail screen ===================
  header_itm_rgt: {
    flexDirection: 'row'
  },
  product_bannr: {
    marginBottom: 16
  },
  prodct_con: {
    paddingHorizontal: 16
  },
  prodct_hd: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  prodct_hd_txt: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
    color: '#223263',
    flexBasis: 275,
    flexGrow: 0,
    flexShrink: 1
  },


  // Account Screen Start here 
  account_con: {
    marginHorizontal: 16,
  },
  account_lst: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderColor: '#EBF0FF',
    justifyContent: 'space-between'
  },
  account_lft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prof_txt: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#223263'
  },


  // profile screen start here 
  profile_con: {
    marginVertical: 24,
    marginHorizontal: 16
  },
  profile_imgname: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  profile_img: {
    marginRight: 16
  },
  name_txt: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#223263'
  },
  name_email: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#9098B1'
  },
  info_rgt: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inforgt_txt: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#9098B1',
    marginRight: 16
  },

  // change profile screen 
  chang_emailtxt: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#223263',
    marginBottom: 12
  },
  chang_paratxt: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#40BFFF',
    marginBottom: 12
  },
  chang_email: {
    paddingHorizontal: 16,
    marginVertical: 18,
    flex: 1
  },
  chang_emailitm: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 8
  },
  changemail_input: {
    fontSize: 16, // this affects user input, not placeholder
    fontWeight: '700',
    flexBasis: '95%',
    paddingRight: 16,
    flexGrow: 1,
    flexShrink: 0
  },
  glo_btnpad: {
    marginHorizontal: 16
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedText: {
    fontSize: 16,
    color: '#6E6E6E',
    fontWeight: '700',
    fontFamily: 'Inter-Bold'
  },
  placeholderText: {
    color: '#999',
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    marginTop: 5,
    backgroundColor: '#fff',
    elevation: 3,
    zIndex: 999,
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#6E6E6E',
    fontWeight: '700',
    fontFamily: 'Inter-Bold'
  },
  selectedOption: {
    color: '#00AEEF',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold'
  },
  placeholderText: {
    color: '#999',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  afterSelectText: {
    color: '#40BFFF', // This will apply after a selection is made
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 16
  },

  // address screen start here 
  address_sec: {
    flex: 1,
    marginBottom: 24,
  },
  address_con: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  address_itm: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    padding: 24,
    marginBottom: 16
  },
  address_nametxt: {
    color: '#223263',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginBottom: 16
  },
  address_infotxt: {
    color: '#223263',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginBottom: 16
  },
  address_phonumrtxt: {
    color: '#223263',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginBottom: 16
  },
  address_editbtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editbtn_lft: {
    backgroundColor: '#40BFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 5,
    marginRight: 24
  },
  editbtn_lfttxt: {
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },

  // order section start here 
  orerdetail_sec: {
    marginTop: 16,
    marginHorizontal: 16
  },
  orerdetail_con: {
    borderWidth: 1,
    borderColor: "#EBF0FF",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16
  },
  oder_date: {
    color: '#9199b1',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  oder_status: {
    borderTopWidth: 2,
    borderColor: '#EBF0FF',
    borderStyle: 'dashed',
    marginBottom: 12,
    paddingTop: 12,
    marginTop: 12
  },
  oder_statinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  status_info: {
    color: '#223263',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },


  // cart section start here 
  cart_sec: {
    marginTop: 16
  },
  cart_sechd: {
    color: '#223263',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    textAlign: 'center'
  },
  cart_con: {
    borderTopWidth: 2,
    marginTop: 16,
    paddingHorizontal: 16
  },
  cart_itm: {
    borderWidth: 2,
    borderColor: '#EBF0FF',
    marginTop: 16,
    padding: 16,
    flexDirection: 'row'
  },
  cart_itmlft: {
    width: 72,
    height: 72,
    backgroundColor: '#DADADAD4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 17
  },
  prod_icon: {
    flexDirection: 'row',
    marginLeft: 13
  },
  prod_name: {
    flexDirection: 'row',
  },
  itmadd_more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  itm_addcon: {
    borderWidth: 2,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    width: 104,
    borderRadious: 1
  },

  itm_addsub: {
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itm_addsubnum: {
    width: 40,
    backgroundColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itm_addsubnumtxt:{
    color: '#223263',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  }
})