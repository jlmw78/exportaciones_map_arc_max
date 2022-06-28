// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_provincias_1rule0_eval_expression(context) {
    // PROVINCIA = 'SANTA FE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['PROVINCIA']  == 'SANTA FE');
    } else {
        return (feature['PROVINCIA']  == 'SANTA FE');
    }
}


function exp_provincias_1rule1_eval_expression(context) {
    // PROVINCIA <> 'SANTA FE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['PROVINCIA']  != 'SANTA FE');
    } else {
        return (feature['PROVINCIA']  != 'SANTA FE');
    }
}


function exp_anio_20000101_2rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20000101_2rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20000101_2rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20000101_2rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20000101_2rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20000101_2rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20000101_2rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20010101_3rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20010101_3rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20010101_3rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20010101_3rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20010101_3rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20010101_3rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20010101_3rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20020101_4rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20020101_4rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20020101_4rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20020101_4rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20020101_4rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20020101_4rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20020101_4rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20030101_5rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20030101_5rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20030101_5rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20030101_5rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20030101_5rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20030101_5rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20030101_5rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20040101_6rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20040101_6rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20040101_6rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20040101_6rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20040101_6rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20040101_6rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20040101_6rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20050101_7rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20050101_7rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20050101_7rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20050101_7rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20050101_7rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20050101_7rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20050101_7rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20060101_8rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20060101_8rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20060101_8rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20060101_8rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20060101_8rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20060101_8rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20060101_8rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20070101_9rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20070101_9rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20070101_9rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20070101_9rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20070101_9rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20070101_9rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20070101_9rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20080101_10rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20080101_10rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20080101_10rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20080101_10rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20080101_10rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20080101_10rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20080101_10rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20090101_11rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20090101_11rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20090101_11rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20090101_11rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20090101_11rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20090101_11rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20090101_11rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20100101_12rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20100101_12rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20100101_12rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20100101_12rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20100101_12rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20100101_12rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20100101_12rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20110101_13rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20110101_13rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20110101_13rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20110101_13rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20110101_13rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20110101_13rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20110101_13rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20120101_14rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20120101_14rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20120101_14rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20120101_14rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20120101_14rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20120101_14rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20120101_14rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20130101_15rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20130101_15rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20130101_15rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20130101_15rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20130101_15rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20130101_15rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20130101_15rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20140101_16rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20140101_16rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20140101_16rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20140101_16rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20140101_16rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20140101_16rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20140101_16rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20150101_17rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20150101_17rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20150101_17rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20150101_17rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20150101_17rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20150101_17rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20150101_17rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20160101_18rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20160101_18rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20160101_18rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20160101_18rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20160101_18rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20160101_18rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20160101_18rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20170101_19rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20170101_19rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20170101_19rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20170101_19rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20170101_19rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20170101_19rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20170101_19rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20180101_20rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20180101_20rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20180101_20rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20180101_20rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20180101_20rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20180101_20rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20180101_20rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20190101_21rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20190101_21rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20190101_21rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20190101_21rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20190101_21rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20190101_21rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20190101_21rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20200101_22rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20200101_22rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20200101_22rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20200101_22rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20200101_22rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20200101_22rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20200101_22rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}


function exp_anio_20210101_23rule0_eval_expression(context) {
    // toneladas >= 0 AND toneladas <= 660.178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  >= 0.0) && (feature.properties['toneladas']  <= 660.17764));
    } else {
        return ((feature['toneladas']  >= 0.0) && (feature['toneladas']  <= 660.17764));
    }
}


function exp_anio_20210101_23rule1_eval_expression(context) {
    // toneladas > 660.178 AND toneladas <= 28850.3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 660.17764) && (feature.properties['toneladas']  <= 28850.285714));
    } else {
        return ((feature['toneladas']  > 660.17764) && (feature['toneladas']  <= 28850.285714));
    }
}


function exp_anio_20210101_23rule2_eval_expression(context) {
    // toneladas > 28850.3 AND toneladas <= 143773

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 28850.285714) && (feature.properties['toneladas']  <= 143773.059286));
    } else {
        return ((feature['toneladas']  > 28850.285714) && (feature['toneladas']  <= 143773.059286));
    }
}


function exp_anio_20210101_23rule3_eval_expression(context) {
    // toneladas > 143773 AND toneladas <= 830923

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 143773.059286) && (feature.properties['toneladas']  <= 830922.8979));
    } else {
        return ((feature['toneladas']  > 143773.059286) && (feature['toneladas']  <= 830922.8979));
    }
}


function exp_anio_20210101_23rule4_eval_expression(context) {
    // toneladas > 830923 AND toneladas <= 1.67601e+07

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 830922.8979) && (feature.properties['toneladas']  <= 16760108.142857));
    } else {
        return ((feature['toneladas']  > 830922.8979) && (feature['toneladas']  <= 16760108.142857));
    }
}


function exp_anio_20210101_23rule5_eval_expression(context) {
    // toneladas > 1.67601e+07 AND toneladas <= 1.78122e+08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 16760108.142857) && (feature.properties['toneladas']  <= 178121577.0));
    } else {
        return ((feature['toneladas']  > 16760108.142857) && (feature['toneladas']  <= 178121577.0));
    }
}


function exp_anio_20210101_23rule6_eval_expression(context) {
    // toneladas > 1.78122e+08 AND toneladas <= 3.86917e+09

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['toneladas']  > 178121577.0) && (feature.properties['toneladas']  <= 3869174453.0));
    } else {
        return ((feature['toneladas']  > 178121577.0) && (feature['toneladas']  <= 3869174453.0));
    }
}