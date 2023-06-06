export interface SliderModel {
  id?: string;
  title?: string;
  authors?: { name?: string, avatar_url?: string }[];
  description?: string;
  published?: {
    start?: string | null;
    end?: string | null;
    time_zone?: string | null;
  };
  tags?: string[];
  files?: {
    url?: string;
    expiry_time?: string;
  }[];
}
