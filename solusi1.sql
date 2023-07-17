/*
 Navicat Premium Data Transfer

 Source Server         : postgre5434
 Source Server Type    : PostgreSQL
 Source Server Version : 100010
 Source Host           : localhost:5434
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100010
 File Encoding         : 65001

 Date: 16/07/2023 12:05:39
*/


-- ----------------------------
-- Sequence structure for feedback_sequence_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."feedback_sequence_id";
CREATE SEQUENCE "public"."feedback_sequence_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1
CYCLE ;

-- ----------------------------
-- Sequence structure for useradmin_sequence_id
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."useradmin_sequence_id";
CREATE SEQUENCE "public"."useradmin_sequence_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS "public"."feedback";
CREATE TABLE "public"."feedback" (
  "id" int4 NOT NULL DEFAULT nextval('feedback_sequence_id'::regclass),
  "sender" varchar(255) COLLATE "pg_catalog"."default",
  "valuetext" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6),
  "updated_at" timestamp(6),
  "type" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO "public"."feedback" VALUES (1, 'nopal', 'asu ini app', '2023-07-16 12:02:13.456404', '2023-07-16 12:02:13.456404', 'feedback');
INSERT INTO "public"."feedback" VALUES (2, 'reno', 'asu ini app', '2023-07-16 12:04:13.008794', '2023-07-16 12:04:13.008794', 'feedback');

-- ----------------------------
-- Table structure for useradmin
-- ----------------------------
DROP TABLE IF EXISTS "public"."useradmin";
CREATE TABLE "public"."useradmin" (
  "id" int4 NOT NULL DEFAULT nextval('useradmin_sequence_id'::regclass),
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of useradmin
-- ----------------------------
INSERT INTO "public"."useradmin" VALUES (1, 'rentod', 'rentod@gmail.com', ' ');
INSERT INTO "public"."useradmin" VALUES (2, 'nopal', 'nopal@gmail.com', 'nopal');
INSERT INTO "public"."useradmin" VALUES (3, 'nopal', 'nopal@gmail.com', 'nopal');
INSERT INTO "public"."useradmin" VALUES (4, 'nopal', 'nopal@gmail.com', 'nopal');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."feedback_sequence_id"
OWNED BY "public"."feedback"."id";
SELECT setval('"public"."feedback_sequence_id"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."useradmin_sequence_id"
OWNED BY "public"."useradmin"."id";
SELECT setval('"public"."useradmin_sequence_id"', 4, true);

-- ----------------------------
-- Primary Key structure for table feedback
-- ----------------------------
ALTER TABLE "public"."feedback" ADD CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table useradmin
-- ----------------------------
ALTER TABLE "public"."useradmin" ADD CONSTRAINT "UserAdmin_pkey" PRIMARY KEY ("id");
