import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  setCustomValue,
  latitude,
  longitude,
  detailPage = false,
}: KakaoMapProps) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    // detailPage가 아닌 경우엔 setCustomValue 함수가 props로 내려오니 단언해주는 것.
    if (detailPage) return;
    setCustomValue!("latitude", mouseEvent.latLng.getLat());
    setCustomValue!("longitude", mouseEvent.latLng.getLng());
  };

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handleClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
