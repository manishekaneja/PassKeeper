import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CredCardContainer from '../components/common/CredCard/CredCardContainer';
import ScreenContainerLayout from '../components/common/ScreenContainer/ScreenContainerLayout';
import {bg, border, color, flx, font, m, my, p, px} from '../styles';
import {theme} from '../styles/theme';

const {height} = Dimensions.get('screen');
const CreateKeyCard: FC<NoProps> = () => {
  const [cardInfo, setCardInfo] = useState<{
    title: string;
    username: string;
    password: string;
  }>({title: '', password: '', username: ''});
  const [cardInfoError, setCardInfoError] = useState<{
    title: string;
    username: string;
    password: string;
  }>({title: '', password: '', username: ''});
  // const [invalidEntries, setInvalidEntries] = useState<string[]>([]);
  const validateValue = useCallback(
    (type: 'username' | 'title' | 'password') => (value: String) => {
      if (['username', 'title', 'password'].includes(type)) {
        if (!value || value.trim().length <= 0) {
          setCardInfoError(pv => ({...pv, [type]: '*Required'}));
          return false;
        } else {
          setCardInfoError(pv => ({...pv, [type]: ''}));
          return true;
        }
      }
      return false;
    },
    [],
  );
  const onChange = useCallback(
    (type: 'username' | 'title' | 'password') => (value: String) => {
      if (['username', 'title', 'password'].includes(type)) {
        setCardInfo(pv => ({...pv, [type]: value}));
        validateValue(type)(value);
      }
    },
    [validateValue],
  );
  const usernameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const titleRef = useRef<TextInput | null>(null);

  const isAnyInputInvalid = useMemo(
    () =>
      !!cardInfoError.title ||
      !!cardInfoError.username ||
      !!cardInfoError.password ||
      !cardInfo.password ||
      !cardInfo.title ||
      !cardInfo.username,
    [cardInfoError, cardInfo],
  );
  const onPress = useCallback(() => {
    if (isAnyInputInvalid) {
      return Alert.alert('Mandatory Input have invalid Value');
    }
    Alert.alert(JSON.stringify(cardInfo));
    Keyboard.dismiss();
  }, [cardInfo, isAnyInputInvalid]);
  return (
    <ScreenContainerLayout>
      <View style={[{minHeight: height - 37}, flx.center, px.d10]}>
        <View style={[flx.f1]}></View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
          scrollEnabled>
          <CredCardContainer>
            <TextInput
              ref={titleRef}
              onChangeText={onChange('title')}
              autoCapitalize="none"
              autoCompleteType="name"
              autoFocus
              keyboardType="default"
              contextMenuHidden={true}
              returnKeyType="next"
              spellCheck={false}
              textContentType="givenName"
              blurOnSubmit={false}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              onSubmitEditing={() =>
                validateValue('title')(cardInfo.title) &&
                usernameRef.current &&
                usernameRef.current.focus()
              }
              placeholderTextColor={theme.light}
              placeholder="Card Title"
              style={[
                {backgroundColor: theme.light + '22'},
                border.r10,
                color.dark,
                px.d10,
                my.d10,
                font.f20,
                {letterSpacing: 2.5, fontWeight: '600'},
              ]}
            />
            {!!cardInfoError.title && (
              <View>
                <Text
                  style={[{color: theme.error, letterSpacing: 2.5}, font.f12]}>
                  {cardInfoError.title}
                </Text>
              </View>
            )}
          </CredCardContainer>
          <CredCardContainer>
            <TextInput
              ref={usernameRef}
              onChangeText={onChange('username')}
              autoCapitalize="none"
              contextMenuHidden={true}
              autoCompleteType={'username'}
              keyboardType="email-address"
              spellCheck={false}
              returnKeyType="next"
              textContentType="username"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              placeholderTextColor={theme.light}
              blurOnSubmit={false}
              placeholder="username/email"
              onSubmitEditing={() =>
                validateValue('username')(cardInfo.username) &&
                passwordRef.current &&
                passwordRef.current.focus()
              }
              style={[
                {backgroundColor: theme.light + '22'},
                border.r10,
                color.dark,
                px.d10,
                my.d10,
                font.f16,
                {letterSpacing: 2.5},
              ]}
            />
            {!!cardInfoError.username && (
              <View>
                <Text
                  style={[{color: theme.error, letterSpacing: 2.5}, font.f10]}>
                  {cardInfoError.username}
                </Text>
              </View>
            )}

            <TextInput
              ref={passwordRef}
              onChangeText={onChange('password')}
              autoCapitalize="none"
              autoCompleteType={'password'}
              contextMenuHidden={true}
              keyboardType="visible-password"
              spellCheck={false}
              returnKeyType="done"
              textContentType="password"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              placeholderTextColor={theme.light}
              placeholder="password"
              blurOnSubmit={false}
              onSubmitEditing={() =>
                validateValue('password')(cardInfo.password) && onPress()
              }
              style={[
                {backgroundColor: theme.light + '22'},
                border.r10,
                color.dark,
                px.d10,
                my.d10,
                font.f16,
                {letterSpacing: 2.5},
              ]}
            />
            {!!cardInfoError.password && (
              <View>
                <Text
                  style={[{color: theme.error, letterSpacing: 2.5}, font.f12]}>
                  {cardInfoError.password}
                </Text>
              </View>
            )}
          </CredCardContainer>
          <View style={[flx.cntr, p.d10, flx.row]}>
            <View
              style={[
                isAnyInputInvalid
                  ? {backgroundColor: theme.dark + '99'}
                  : bg.dark,
                border.r50,
                m.d3,
                {width: 120, elevation: 2},
              ]}>
              <Pressable
                {...{
                  onPress,
                  ...(isAnyInputInvalid
                    ? {}
                    : {
                        android_ripple: {
                          borderless: false,
                          color: theme.secondary.light,
                          radius: 50,
                        },
                      }),
                }}
                style={[flx.cntr, p.d10]}>
                <Text style={[{color: theme.light}]}>Save</Text>
              </Pressable>
            </View>
            <View
              style={[m.d3, bg.dark, border.r50, {width: 120, elevation: 2}]}>
              <Pressable
                {...{
                  onPress: () => {
                    setCardInfo({password: '', title: '', username: ''});
                    setCardInfoError({password: '', title: '', username: ''});
                    usernameRef.current && usernameRef.current.clear();
                    titleRef.current && titleRef.current.clear();
                    passwordRef.current && passwordRef.current.clear();
                  },
                }}
                android_ripple={{
                  borderless: false,
                  color: theme.secondary.light,
                  radius: 50,
                }}
                style={[flx.cntr, p.d10]}>
                <Text style={[{color: theme.light}]}>Reset</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={[flx.f1]}></View>
      </View>
    </ScreenContainerLayout>
  );
};

export default CreateKeyCard;
