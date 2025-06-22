import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, TextInput } from 'react-native';
import globle_Style from '../../css/globle_Style';
import ProfilePicture from '../../../assets/images/ProfilePicture.svg';
import RightArrow from '../../../assets/images/right_arrow.svg';
import Gender from '../../../assets/images/Gender.svg';
import Date from '../../../assets/images/Date.svg';
import Email from '../../../assets/images/email.svg';
import Phone from '../../../assets/images/Phone.svg';
import Edit from '../../../assets/images/edit.svg';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [isEditable, setIsEditable] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [email, setEmail] = useState('sky@gmail.com');



  const handleEmailPress = () => {
    if (isEditable) {
      setIsEmailModalVisible(true);
    }
  };

  const handleSaveEmail = () => {
    // You can also add validation here
    setIsEmailModalVisible(false);
  };

  return (
    <View style={globle_Style.container}>
      <View style={[globle_Style.profile_sec, { flex: 1 }]}>
        <View style={globle_Style.profile_con}>
          <View style={globle_Style.profile_imgname}>
            <View style={globle_Style.profile_img}>
              <ProfilePicture style={{ width: 72, height: 72, borderRadious: 36 }} />
            </View>
            <View style={globle_Style.profile_name}>
              <Text style={globle_Style.name_txt}>Dominic Ovo</Text>
              <Text style={globle_Style.name_email}>@dominic_ovo</Text>
            </View>
          </View>
          <View style={globle_Style.prfile_info}>
            <TouchableOpacity disabled={!isEditable}>
              <View style={globle_Style.account_lst}>
                <View style={globle_Style.account_lft}>
                  <Gender style={{ marginRight: 16 }} />
                  <Text style={globle_Style.prof_txt}>Gender</Text>
                </View>
                <View style={globle_Style.info_rgt}>
                  <Text style={globle_Style.inforgt_txt}>Male</Text>
                  {isEditable ? (<Edit  />) : (<RightArrow />)}
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity disabled={!isEditable}>
              <View style={globle_Style.account_lst}>
                <View style={globle_Style.account_lft}>
                  <Date style={{ marginRight: 16 }} />
                  <Text style={globle_Style.prof_txt}>Birthday</Text>
                </View>
                <View style={globle_Style.info_rgt}>
                  <Text style={globle_Style.inforgt_txt}>12-12-2000</Text>
                  {isEditable ? (<Edit  />) : (<RightArrow />)}
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEmailPress}>
              <View style={globle_Style.account_lst}>
                <View style={globle_Style.account_lft}>
                  <Email style={{ marginRight: 16 }} />
                  <Text style={globle_Style.prof_txt}>Email</Text>
                </View>
                <View style={globle_Style.info_rgt}>
                  <Text style={globle_Style.inforgt_txt}>{email}</Text>
                  {isEditable ? (<Edit  />) : (<RightArrow />)}
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity disabled={!isEditable}>
              <View style={globle_Style.account_lst}>
                <View style={globle_Style.account_lft}>
                  <Phone style={{ marginRight: 16 }} />
                  <Text style={globle_Style.prof_txt}>Phone Number</Text>
                </View>
                <View style={globle_Style.info_rgt}>
                  <Text style={globle_Style.inforgt_txt}>(307) 555-0133</Text>
                  {isEditable ? (<Edit/>) : (<RightArrow />)}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={globle_Style.glo_btnpad}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (isEditable) {
              // Perform save logic here if needed
              setIsEditable(false);
            } else {
              setIsEditable(true);
            }
          }}
        >
          <View style={globle_Style.globle_btn}>
            <Text style={globle_Style.gbl_btn}>{isEditable ? 'Save' : 'Edit Profile'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>



      {/* Email Edit Modal */}
      <Modal
        visible={isEmailModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsEmailModalVisible(false)}
      >
        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: '85%', padding: 20, backgroundColor: 'white', borderRadius: 10
          }}>
            <Text style={{ marginBottom: 10 }}>Edit Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={{
                borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15
              }}
              placeholder="Enter new email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={handleSaveEmail}>
              <View style={{
                backgroundColor: '#007AFF', padding: 10, borderRadius: 5
              }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
