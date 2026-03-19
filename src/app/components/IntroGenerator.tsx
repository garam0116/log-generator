"use client";

import React, { useState, useMemo } from "react";
import { Row, Col, Input, Typography, Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface IntroData {
  datetime: string;
  location: string;
  koreanQuote: string;
  englishQuote: string;
}

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const nl2br = (text: string): string =>
  escapeHtml(text).replace(/\n/g, "<br>");

/* ─────────────────────────────────────────────
   Template 1 – iOS 알림창 컨셉
───────────────────────────────────────────── */
const generateIOSTemplate = (data: IntroData): string => {
  const dt = escapeHtml(data.datetime);
  const loc = escapeHtml(data.location);
  const kr = nl2br(data.koreanQuote);
  const en = nl2br(data.englishQuote);

  return [
    `<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');</style>`,
    `<div style="text-align:center;margin:24px 0;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;">`,
    `<div style="display:inline-block;max-width:400px;width:calc(100% - 40px);background:rgba(255,255,255,0.97);border-radius:20px;padding:18px 20px;box-shadow:0 8px 36px rgba(0,0,0,0.14),0 2px 10px rgba(0,0,0,0.07);text-align:left;vertical-align:top;box-sizing:border-box;">`,
    /* Header row */
    `<div style="display:flex;align-items:center;margin-bottom:10px;">`,
    `<div style="width:36px;height:36px;min-width:36px;border-radius:10px;background:linear-gradient(135deg,#667eea,#764ba2);margin-right:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:18px;">📖</span></div>`,
    `<span style="font-size:14px;font-weight:600;color:#1c1c1e;letter-spacing:-0.2px;">LOG</span>`,
    `<span style="margin-left:auto;font-size:12px;color:#8e8e93;padding-left:10px;white-space:nowrap;">방금 전</span>`,
    `</div>`,
    /* Divider */
    `<div style="height:1px;background:rgba(0,0,0,0.07);margin-bottom:12px;"></div>`,
    /* Date / Time */
    `<div style="display:flex;align-items:center;margin-bottom:7px;">`,
    `<span style="font-size:15px;margin-right:9px;flex-shrink:0;">⏰</span>`,
    `<span style="font-size:15px;color:#1c1c1e;font-weight:500;font-family:'Noto Sans KR',-apple-system,sans-serif;">${dt}</span>`,
    `</div>`,
    /* Location */
    `<div style="display:flex;align-items:center;margin-bottom:15px;">`,
    `<span style="font-size:15px;margin-right:9px;flex-shrink:0;">📍</span>`,
    `<span style="font-size:15px;color:#1c1c1e;font-weight:500;font-family:'Noto Sans KR',-apple-system,sans-serif;">${loc}</span>`,
    `</div>`,
    /* Korean quote */
    `<div style="background:linear-gradient(135deg,#f5f5f7,#ffffff);border-radius:13px;padding:13px 15px;margin-bottom:9px;border-left:3px solid #667eea;">`,
    `<p style="margin:0;font-size:15px;color:#1c1c1e;line-height:1.65;letter-spacing:-0.3px;font-family:'Noto Sans KR',-apple-system,sans-serif;">${kr}</p>`,
    `</div>`,
    /* English quote */
    `<div style="background:rgba(102,126,234,0.07);border-radius:13px;padding:13px 15px;border-left:3px solid #764ba2;">`,
    `<p style="margin:0;font-size:14px;color:#3c3c43;line-height:1.55;font-style:italic;">\u201c${en}\u201d</p>`,
    `</div>`,
    `</div>`,
    `</div>`,
  ].join("\n");
};

/* ─────────────────────────────────────────────
   Template 2 – 페이트 시리즈 성배전쟁 컨셉
───────────────────────────────────────────── */
const generateFateTemplate = (data: IntroData): string => {
  const dt = escapeHtml(data.datetime);
  const loc = escapeHtml(data.location);
  const kr = nl2br(data.koreanQuote);
  const en = nl2br(data.englishQuote);

  return [
    `<style>@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Noto+Serif+KR:wght@300;400;500;600&display=swap');</style>`,
    `<div style="text-align:center;margin:24px 0;">`,
    `<div style="display:inline-block;max-width:500px;width:calc(100% - 40px);background:linear-gradient(180deg,#07071a 0%,#0e0e2a 50%,#07071a 100%);border:1px solid #3d2e00;border-top:3px solid #c8a800;border-bottom:3px solid #c8a800;padding:32px 28px;position:relative;box-shadow:0 0 50px rgba(200,168,0,0.18),inset 0 0 60px rgba(0,0,0,0.6);text-align:center;box-sizing:border-box;vertical-align:top;">`,
    /* Corner ornaments */
    `<div style="position:absolute;top:0;left:0;width:22px;height:22px;border-top:3px solid #c8a800;border-left:3px solid #c8a800;pointer-events:none;"></div>`,
    `<div style="position:absolute;top:0;right:0;width:22px;height:22px;border-top:3px solid #c8a800;border-right:3px solid #c8a800;pointer-events:none;"></div>`,
    `<div style="position:absolute;bottom:0;left:0;width:22px;height:22px;border-bottom:3px solid #c8a800;border-left:3px solid #c8a800;pointer-events:none;"></div>`,
    `<div style="position:absolute;bottom:0;right:0;width:22px;height:22px;border-bottom:3px solid #c8a800;border-right:3px solid #c8a800;pointer-events:none;"></div>`,
    /* Sub-header */
    `<div style="font-family:'Cinzel Decorative',serif;font-size:11px;color:#c8a800;letter-spacing:4px;text-transform:uppercase;margin-bottom:10px;">Holy Grail War</div>`,
    /* Top divider */
    `<div style="height:1px;background:linear-gradient(90deg,transparent,#c8a800,transparent);margin-bottom:22px;"></div>`,
    /* Crest */
    `<div style="width:64px;height:64px;border:2px solid #c8a800;border-radius:50%;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 18px rgba(200,168,0,0.35);">`,
    `<span style="font-size:30px;">⚔️</span>`,
    `</div>`,
    /* Date / Time */
    `<div style="font-family:'Cinzel Decorative',serif;font-size:13px;color:#c8a800;letter-spacing:2px;margin-bottom:7px;">${dt}</div>`,
    /* Location */
    `<div style="font-family:'Noto Serif KR',serif;font-size:13px;color:#9a8a6a;letter-spacing:1px;margin-bottom:18px;">${loc}</div>`,
    /* Decorative divider */
    `<div style="color:#c8a800;font-size:16px;letter-spacing:10px;margin-bottom:18px;">\u2736 \u2736 \u2736</div>`,
    /* Korean quote */
    `<div style="padding:15px 18px;border:1px solid rgba(200,168,0,0.25);background:rgba(200,168,0,0.06);margin-bottom:12px;">`,
    `<p style="margin:0;font-size:15px;color:#e8d8b8;line-height:1.85;font-family:'Noto Serif KR',serif;">${kr}</p>`,
    `</div>`,
    /* English quote */
    `<div style="padding:15px 18px;border:1px solid rgba(200,168,0,0.25);background:rgba(200,168,0,0.06);">`,
    `<p style="margin:0;font-size:13px;color:#c8a800;line-height:1.75;font-family:'Cinzel Decorative',serif;font-style:italic;">\u201c${en}\u201d</p>`,
    `</div>`,
    /* Bottom divider */
    `<div style="height:1px;background:linear-gradient(90deg,transparent,#c8a800,transparent);margin-top:20px;margin-bottom:10px;"></div>`,
    `<div style="font-family:'Cinzel Decorative',serif;font-size:10px;color:#4a3a00;letter-spacing:4px;">\u2B27 FATE \u2B27</div>`,
    `</div>`,
    `</div>`,
  ].join("\n");
};

/* ─────────────────────────────────────────────
   Template 3 – 해리 포터 시리즈 컨셉
───────────────────────────────────────────── */
const generateHarryPotterTemplate = (data: IntroData): string => {
  const dt = escapeHtml(data.datetime);
  const loc = escapeHtml(data.location);
  const kr = nl2br(data.koreanQuote);
  const en = nl2br(data.englishQuote);

  return [
    `<style>@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Cinzel:wght@400;600;700&family=Noto+Serif+KR:wght@300;400;500&display=swap');</style>`,
    `<div style="text-align:center;margin:24px 0;">`,
    `<div style="display:inline-block;max-width:460px;width:calc(100% - 40px);background:#f5ead4;background-image:repeating-linear-gradient(0deg,rgba(139,100,20,0.04) 0px,rgba(139,100,20,0.04) 1px,transparent 1px,transparent 28px);border-left:3px solid #8b6414;border-right:3px solid #8b6414;border-top:1px solid #b8942a;border-bottom:1px solid #b8942a;padding:36px 32px;text-align:left;box-shadow:4px 4px 18px rgba(0,0,0,0.28),-2px 0 8px rgba(0,0,0,0.1);box-sizing:border-box;vertical-align:top;">`,
    /* Wax seal */
    `<div style="text-align:center;margin-bottom:22px;">`,
    `<div style="width:72px;height:72px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#e8274b,#7a0010);margin:0 auto;display:flex;align-items:center;justify-content:center;box-shadow:2px 3px 10px rgba(0,0,0,0.45);">`,
    `<span style="color:#f5ead4;font-size:32px;font-weight:700;font-family:'Cinzel',serif;">H</span>`,
    `</div>`,
    `</div>`,
    /* School name */
    `<div style="text-align:center;margin-bottom:18px;">`,
    `<div style="font-family:'Cinzel',serif;font-size:11px;color:#5c3d0e;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;">Hogwarts School of Witchcraft and Wizardry</div>`,
    `<div style="border-top:1px solid #8b6414;border-bottom:1px solid #8b6414;padding:3px 0;margin:0 16px;"><div style="height:1px;background:#c8a050;margin:1px 0;"></div></div>`,
    `</div>`,
    /* Date / Time row */
    `<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px dashed rgba(139,100,20,0.35);padding-bottom:9px;margin-bottom:9px;">`,
    `<span style="font-family:'IM Fell English',serif;font-size:13px;color:#5c3d0e;font-style:italic;">날짜 · 시간</span>`,
    `<span style="font-family:'Cinzel',serif;font-size:13px;color:#3d2b0e;text-align:right;">${dt}</span>`,
    `</div>`,
    /* Location row */
    `<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px dashed rgba(139,100,20,0.35);padding-bottom:9px;margin-bottom:20px;">`,
    `<span style="font-family:'IM Fell English',serif;font-size:13px;color:#5c3d0e;font-style:italic;">장소</span>`,
    `<span style="font-family:'Cinzel',serif;font-size:13px;color:#3d2b0e;text-align:right;">${loc}</span>`,
    `</div>`,
    /* Korean quote */
    `<div style="padding:14px 16px;background:rgba(139,100,20,0.09);border-left:3px solid #8b6414;margin-bottom:14px;">`,
    `<p style="margin:0;font-size:15px;color:#2c1a00;line-height:1.85;font-family:'Noto Serif KR',serif;">${kr}</p>`,
    `</div>`,
    /* English quote */
    `<div style="padding:13px 16px;background:rgba(139,100,20,0.05);border-right:3px solid #8b6414;">`,
    `<p style="margin:0;font-size:14px;color:#5c3d0e;line-height:1.75;font-style:italic;font-family:'IM Fell English',serif;">\u201c${en}\u201d</p>`,
    `</div>`,
    /* Footer */
    `<div style="text-align:center;margin-top:22px;border-top:1px solid #8b6414;padding-top:12px;">`,
    `<span style="font-family:'Cinzel',serif;font-size:11px;color:#8b6414;letter-spacing:3px;">\u2727 MAGIC AWAITS \u2727</span>`,
    `</div>`,
    `</div>`,
    `</div>`,
  ].join("\n");
};

/* ─────────────────────────────────────────────
   IntroGenerator Component
───────────────────────────────────────────── */
const IntroGenerator: React.FC = () => {
  const [data, setData] = useState<IntroData>({
    datetime: "",
    location: "",
    koreanQuote: "",
    englishQuote: "",
  });

  const templates = useMemo(
    () => [
      {
        key: "ios",
        label: "🍎 iOS 알림창",
        html: generateIOSTemplate(data),
      },
      {
        key: "fate",
        label: "⚔️ 페이트 성배전쟁",
        html: generateFateTemplate(data),
      },
      {
        key: "hp",
        label: "⚡ 해리 포터",
        html: generateHarryPotterTemplate(data),
      },
    ],
    [data]
  );

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success(`${label} HTML이 클립보드에 복사되었습니다.`);
    } catch {
      message.error("복사 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      {/* Input form */}
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12}>
          <Text strong>날짜 / 시간</Text>
          <Input
            value={data.datetime}
            onChange={(e) =>
              setData((prev) => ({ ...prev, datetime: e.target.value }))
            }
            placeholder="예: 2024년 3월 19일 오후 10시"
            style={{ marginTop: 6 }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Text strong>장소</Text>
          <Input
            value={data.location}
            onChange={(e) =>
              setData((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="예: 서울 시내 어느 골목"
            style={{ marginTop: 6 }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Text strong>한마디 (한글)</Text>
          <TextArea
            value={data.koreanQuote}
            onChange={(e) =>
              setData((prev) => ({ ...prev, koreanQuote: e.target.value }))
            }
            placeholder="한글 한마디를 입력하세요"
            rows={3}
            style={{ marginTop: 6 }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Text strong>한마디 (영문)</Text>
          <TextArea
            value={data.englishQuote}
            onChange={(e) =>
              setData((prev) => ({ ...prev, englishQuote: e.target.value }))
            }
            placeholder="Enter your English quote"
            rows={3}
            style={{ marginTop: 6 }}
          />
        </Col>
      </Row>

      {/* Template outputs */}
      {templates.map(({ key, label, html }) => (
        <div
          key={key}
          style={{
            marginBottom: 40,
            borderTop: "1px solid #f0f0f0",
            paddingTop: 24,
          }}
        >
          <Title level={4}>{label}</Title>
          <Row gutter={[16, 16]}>
            {/* Preview */}
            <Col xs={24} lg={12}>
              <Text>미리보기</Text>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: 8,
                  padding: "16px 8px",
                  marginTop: 6,
                  background: "#f9f9f9",
                  minHeight: 200,
                  overflow: "hidden",
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Col>
            {/* HTML code */}
            <Col xs={24} lg={12}>
              <Text>HTML 코드</Text>
              <TextArea
                value={html}
                readOnly
                rows={12}
                style={{
                  marginTop: 6,
                  fontFamily: "Consolas, 'Courier New', monospace",
                  fontSize: 12,
                }}
              />
              <Button
                icon={<CopyOutlined />}
                onClick={() => copyToClipboard(html, label)}
                style={{ marginTop: 8 }}
                type="primary"
              >
                HTML 복사
              </Button>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default IntroGenerator;
