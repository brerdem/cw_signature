import React, { useState } from "react";
import SignatureFormatter from "./components/SignatureFormatter";
import styled from "@emotion/styled";
import "./styles.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 760px;
  width: 100%;
  display: block;
`;

const Logo = styled.div`
  color: #fff;
  svg {
    height: 100%;
    fill: #fff;
  }
  height: 50px;
  display: inline-block;
`;

const UserEditor = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Calibre";
  font-weight: 400;
  font-size: 1rem;
  color: #32323c;
  line-height: 1.5625rem;

  margin: 2rem;
`;

const Header = styled.div`
  margin: 2rem;
  padding: 0;
  font-family: Arial;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  line-height: 2.25rem;
  font-size: 1.2rem;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header2 = styled.h2`
  margin: 2rem 2rem 0.5rem;
  padding: 0;
  font-family: Arial;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  line-height: 2.1875rem;
  font-size: 1.2rem;
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const InputLabel = styled.label`
  color: #ffffff;
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  width: 200px;
  font-size: 1.125rem;
`;

const InputElement = styled.input`
  border: 1px solid #fff;
  font-size: 1.125rem;
  width: 100%;
  max-width: 455px;
  color: #fff;
  box-sizing: border-box;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  padding: 12px 14px 12px;
  &:focus {
    outline: none;
  }
`;

const userData = {
    name: "Burak Erdem",
    job: "Managing Partner",
    phone: "5334949969"
};

export default function App() {
    const [user, setUser] = useState(userData);

    const userInfoChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Logo>
                        <svg width="119" height="17" viewBox="0 0 119 17" class="logo">
                            <g fill="#FFF" fillRule="evenodd">
                                <path
                                    shapeRendering="geometricPrecision"
                                    d="M29.462 13.202l-7.584-.096.01-5.888.01-4.062.009-1.347.003-.38c0-.826-.608-.747-.608-.747H18.82c-.407.049-.61.246-.612.594l-.008 11.83c0 2.023 1.692 3.663 3.777 3.663h7.485c.401.045.606-.153.612-.594v-2.379c.049-.3-.155-.498-.612-.594M16.002 10.555h-2.733c-.233.016-.405.109-.52.28a4.934 4.934 0 0 1-4.166 2.247c-2.71 0-4.905-2.13-4.905-4.757s2.195-4.758 4.905-4.758c1.757 0 3.3.897 4.166 2.247.165.194.34.287.52.28h2.733c.54-.039.73-.31.57-.81C15.32 2.19 12.216 0 8.583 0 3.843 0 0 3.728 0 8.325c0 4.598 3.842 8.325 8.583 8.325 3.633 0 6.737-2.19 7.99-5.283.193-.56.003-.83-.571-.812M77.864 15.878l-7.516-7.557 6.596-6.633c.484-.642.338-.978-.44-1.008h-3.002a.972.972 0 0 0-.434.176l-7.378 7.2c-.254.336-.254.616.002.84l8.072 7.816c.115.137.26.195.433.173h3.227c.957 0 1.009-.291.44-1.007M63.603 10.555h-2.735c-.206-.027-.38.068-.52.28a4.935 4.935 0 0 1-4.166 2.247c-2.707 0-4.904-2.13-4.904-4.757s2.197-4.758 4.904-4.758c1.758 0 3.3.897 4.167 2.247.115.213.29.306.52.28h2.734c.594.045.786-.227.57-.81C62.924 2.19 59.818 0 56.184 0 51.442 0 47.6 3.728 47.6 8.325c0 4.598 3.843 8.325 8.582 8.325 3.635 0 6.74-2.19 7.992-5.283.258-.585.067-.855-.57-.812M37.982 13.082c-2.71 0-4.904-2.13-4.904-4.757s2.195-4.757 4.904-4.757 4.904 2.13 4.904 4.757c0 2.628-2.195 4.757-4.904 4.757m0-13.082C33.242 0 29.4 3.728 29.4 8.325c0 4.598 3.843 8.325 8.582 8.325 4.738 0 8.581-3.727 8.581-8.325C46.563 3.728 42.72 0 37.983 0M95.25 4.877c-1.893 0-3.428 1.49-3.428 3.326s1.535 3.324 3.429 3.324c1.891 0 3.426-1.488 3.426-3.324 0-1.837-1.535-3.326-3.426-3.326m0-1.477c2.733 0 4.949 2.15 4.949 4.803 0 2.651-2.216 4.801-4.95 4.801s-4.95-2.15-4.95-4.801c0-2.653 2.216-4.803 4.95-4.803M116.258 13.407h2.19l-4.925-4.95 4.354-4.377h-2l-3.754 3.775V4.288c0-.048.008-.093.023-.135h-1.54l-.006.135v9.12h1.523V9.342h.095l4.04 4.064zM105.05 5.518c1.095 0 1.985.862 1.985 1.925 0 1.063-.89 1.924-1.984 1.924-1.097 0-1.984-.861-1.984-1.924s.887-1.925 1.984-1.925zm4.082 7.934l-3.173-2.728c1.483-.39 2.575-1.7 2.575-3.261 0-1.868-1.56-3.383-3.487-3.383-.749 0-1.44.23-2.01.62.003-.339.005-.544.007-.55h-1.54l-.004 9.302h1.523l.002-3.208 3.917 3.208h2.19zM88.676 4.08c-.004.028-1.477 4.096-2.466 6.828a928.039 928.039 0 0 1-2.236-5.864l-.781 2.52-.006-.002c-.002.024-.607 1.72-1.158 3.267a1446.79 1446.79 0 0 1-2.524-6.749H77.7l3.457 9.186c-.018.043-.025.068-.025.068h1.873l1.103-3.075 1.157 3.075h1.882L90.51 4.08h-1.834z"
                                ></path>
                            </g>
                        </svg>
                    </Logo>
                    İmza
                </Header>
                <UserEditor>
                    <InputWrapper>
                        <InputLabel>İsim Soyisim</InputLabel>
                        <InputElement
                            name="name"
                            onChange={userInfoChange}
                            value={user.name}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel>Title</InputLabel>
                        <InputElement
                            name="job"
                            onChange={userInfoChange}
                            value={user.job}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <InputLabel>Cep telefonu (Başında 0 olmadan ve bitişik)</InputLabel>
                        <InputElement
                            name="phone"
                            onChange={userInfoChange}
                            value={user.phone}
                        />
                    </InputWrapper>
                </UserEditor>
                <Header2>Ön İzleme</Header2>
                <SignatureFormatter user={user} />
            </Container>
        </Wrapper>
    );
}
