import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { shape, string } from "prop-types";
import { saveAs } from "file-saver";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0rem;
`;

const EmailResult = styled.textarea`
  padding: 2rem;
  margin-bottom: 3rem;
`;

const EmailExample = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #fff;
`;

const ButtonLine = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-end;
  padding: 2rem 0;
`;

const Template = ({
  name,
  job,
  phone,
}) => `<table width="427" cellspacing="0" cellpadding="0" border="0">
<tbody style="font-family:Arial;text-align:left">
<tr>
  <td style="vertical-align: top; text-align:left;color:#222222;font-size:13px;line-height: 1.5;font-family:Arial,sans-serif; text-align:left">
      <span style="color:##828282;font-size:13px;line-height: 1.5;font-family: Arial, sans-serif;font-weight: bolder">
        ${name.toLocaleUpperCase("tr")}
      </span>
      <br/>
      <span style="color:#8a8a8a;font-size:13px;line-height: 1.5;font-family:Arial, sans-serif">
        ${job}
      </span>
     
    </td>
  </tr>
  <tr style="height:10px"> 
  </tr>
  <tr style="height:50px">
    <td style="vertical-align: center;text-align:left;color:#9a9a9a;font-size:13px;font-family:Arial,sans-serif; text-align:left">
    <b>The Hood - Tekmer</b><br/>
    Maslak Mahallesi AOS 55. Sokak 42 Maslak A Blok No:2 İç Kapı Nor: 208 
    <br/>
    Sarıyer / İstanbul 34485
    </td>
  </tr>
  <tr>
    <td style="font-size:13px">
    <span style="display:inline-block;color:#9a9a9a;width:12px;font-weight:bold">M</span>
    <span style="width:10px;color:#9a9a9a;">:</span>
      <a
        href="tel:${phone}"
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none;font-size:13px;text-align:left" 
        >0 ${phone.substring(0, 3)} ${phone.substring(3)}</a>
    </td>
  </tr>
  <tr>
    <td style="font-size:13px">
    <span style="display:inline-block;color:#9a9a9a;width:12px;font-weight:bold">T</span>
    <span style="width:10px;color:#9a9a9a;">:</span>
      <a
        href="tel:02122751084"
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none;font-size:13px;text-align:left" 
        >0 212 2751084</a>
    </td>
  </tr>
  <tr>
    <td style="font-size:13px;height:70px">
      <span style="display:inline-block;">
        <a
          href="https://www.linkedin.com/company/clockwork-agency"
          target="_blank"
          rel="noopener noreferrer">
            <img width="32" height="32" src="https://www.clockwork.com.tr/signature_assets/linkedin.png" alt="Clockwork" style="border:none;" />
        </a>
      </span>
      <span style="display:inline-block;">
        <a
          href="https://www.instagram.com/clockworkagency/"
          target="_blank"
          rel="noopener noreferrer">
            <img width="32" height="32" src="https://www.clockwork.com.tr/signature_assets/insta.png" alt="Clockwork" style="border:none;" />
        </a>
      </span>
      <span style="display:inline-block;">
        <a
          href="https://www.facebook.com/clockworkagency"
          target="_blank"
          rel="noopener noreferrer">
            <img width="32" height="32" src="https://www.clockwork.com.tr/signature_assets/fb.png" alt="Clockwork" style="border:none;" />
        </a>
      </span>
    </td>
  </tr>
  <tr>
    <td style="text-align:left;color:#444444;font-size:13px;font-family:tahoma,sans-serif; text-align:left">
      <a
      href="https://www.clockwork.com.tr"
      target="_blank"
      rel="noopener noreferrer">  
        <img width="500" height="122" src="https://www.clockwork.com.tr/signature_assets/banner.jpg?${Math.random()}" alt="Clockwork" style="border:none;" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <p style="font-size:10px;color:#adadad">
      Bu ileti (elektronik posta ve ekleri), gönderici ve yetkili alıcı olan gercek ya da tüzel kişiye özeldir ve gizlidir. Eğer iletinin yetkili alıcısını veya yetkili alıcısına iletmekten sorumlu kişi değilseniz bu iletiyi saklamanız, kopyalamanız, kullanmanız veya iletmeniz kesinlikle yasaktır, lütfen bu iletiyi sisteminizden tamamen siliniz ve göndereni bu konuda uyarınız. Bu iletinin içeriğininin açıklanması veya paylaşımı hukuken sorumluluk teşkil edebilir. Clockwork Bilgi Teknolojileri A.Ş. bu iletinin doğruluğu, bütünlüğü, iletilmesi ve benzeri hususlar konusunda sorumlu tutulamaz.
<br /><br />
This mail (electronic mail and its attachments) is private and confidential to the sender and the authorized individual or entity recipient. If you are not the intended recipient of this mail or the person who is responsible for the transmission of it to the intended recipient, you are hereby notified that storing, copying, using or forwarding of any part of the contents is strictly prohibited, please completely delete it from your system and notify the sender. Any disclosure or sharing of this information may lead to legal responsibility. Clockwork Bilgi Teknolojileri A.S. shall have no liability with regard to the accuracy and integrity of this mail and its transmission.
      </p>
    </td>
  </tr>
</tbody>
</table>`;

const SignatureFormatter = ({ user }) => {
  const [userInfo, setUserInfo] = useState(user);

  const handleSaveFile = () => {
    saveAs(
      new Blob([Template(userInfo)], { type: "text/html;charset=utf-8" }),
      "index.html"
    );
  };

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const Result = Template(userInfo);

  return (
    <Wrapper>
      <EmailExample dangerouslySetInnerHTML={{ __html: Result }} />
      <ButtonLine>
        <button onClick={handleSaveFile}>HTML KAYDET</button>
      </ButtonLine>
      <EmailResult readonly rows="30" value={Result} />
    </Wrapper>
  );
};

SignatureFormatter.propTypes = {
  user: shape({
    name: string.isRequired,
    job: string.isRequired,
    phone: string,
  }).isRequired,
};

export default SignatureFormatter;
