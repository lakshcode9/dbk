/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `tour_details` (text, nullable)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  tour_details text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);